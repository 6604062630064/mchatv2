import { Request, Response } from "express";
import { GoogleResponseObject } from "@/types/google.type";
import { OAuth2Client } from "google-auth-library";
import { cookie, body, validationResult } from "express-validator";
import sql from "@/db";

const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client();

const { GOOGLE_CLIENT_ID, CLIENT_URL, PRIVATE_KEY } = process.env;

exports.google_POST = [
	cookie("g_csrf_token").exists(),
	body("g_csrf_token").exists(),
	asyncHandler(async (req: Request, res: Response) => {
		/** Check the authenticity of csrf tokens*/
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res.sendStatus(401);
		}

		const csrf_token_cookie = req.cookies.g_csrf_token;
		const csrf_token_body = req.body.g_csrf_token;
		if (csrf_token_body !== csrf_token_cookie) {
			return res.sendStatus(401);
		}

		/** Continue here if they are valid*/
		const { credential, g_csrf_token }: GoogleResponseObject = req.body;

		try {
			const ticket = await client.verifyIdToken({
				idToken: credential,
				audience: GOOGLE_CLIENT_ID,
			});

			const payload = ticket.getPayload();
			if (!payload) {
				// If authentication is unsuccessful
				return res.sendStatus(404);
			}

			const userid = payload["sub"];
			const username = payload["name"];

			await sql`insert into users ${sql({
				username: username,
				role: "guest",
				created: Date.now(),
				avatar: "1",
				external_type: "google",
				external_id: userid,
			})} on conflict do nothing`;

			const selectResult =
				await sql`select id, username, role, avatar from users where external_id = ${userid}`;

			const userToken = jwt.sign(selectResult[0], PRIVATE_KEY, {
				expiresIn: "3 days",
			});

			return res
				.status(200)
				.cookie("web_session", userToken, {
					httpOnly: true,
					sameSite: "lax",
					secure: true,
					maxAge: 259200000, // 3 days
				})
				.redirect(CLIENT_URL as string);
		} catch (err) {
			console.log(err);
			return res.sendStatus(401);
		}
	}),
];

exports.logged_in_POST = asyncHandler(async (req: Request, res: Response) => {
	const isAuthenticated = req.authenticated;
	const userInfo = req.userInfo;
	if (isAuthenticated) {
		return res.status(200).json(userInfo);
	} else {
		return res.clearCookie("web_session").sendStatus(401);
	}
});
