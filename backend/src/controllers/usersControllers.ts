import { param, validationResult } from "express-validator";
import { Request, Response } from "express";
import { MessageList } from "@/types/message.type";
import { OtherUserInfoObject } from "@/types/user.type";
import sql from "@/db";
import dotenv from "dotenv";

dotenv.config();

const asyncHandler = require("express-async-handler");
exports.userList_GET = asyncHandler(async (req: Request, res: Response) => {
	if (!req.authenticated) {
		return res.sendStatus(401);
	}

	const id = req.userInfo?.id;

	const listResult =
		await sql`select id, username, avatar from users where id != ${id}`;

	return res.json(listResult);
});

exports.messages_GET = [
	param("userId").escape().isNumeric().withMessage("Not a number"),
	asyncHandler(async (req: Request, res: Response) => {
		const result = validationResult(req);

		if (!req.authenticated || !result.isEmpty()) {
			return res.sendStatus(401);
		}

		const recipient = req.params.userId;
		const sender = req.userInfo?.id;

		const listResult =
			await sql<MessageList>`select id, body, created from umessages where sender = ${sender} and recipient = ${recipient} order by created desc`;

		return res.json(listResult);
	}),
];

exports.messages_POST = [
	param("userId").escape().isNumeric().withMessage("Not a number"),
	asyncHandler(async (req: Request, res: Response) => {
		const result = validationResult(req);

		if (!req.authenticated || !result.isEmpty()) {
			return res.sendStatus(401);
		}

		const content: string = req.body.content;
		const recipient = req.params.userId;
		const sender = req.userInfo?.id;

		const dbResult = await sql`insert into umessages ${sql({
			body: content,
			created: Date.now(),
			sender: sender,
			recipient: recipient,
		})}`;
		return res.sendStatus(202);
	}),
];

exports.userInfo_GET = [
	param("userId").escape().isNumeric().withMessage("Not a number"),
	asyncHandler(async (req: Request, res: Response) => {
		const result = validationResult(req);

		if (!req.authenticated || !result.isEmpty()) {
			return res.sendStatus(401);
		}

		const userId = req.params.userId;

		if (userId === req.userInfo.id.toString()) {
			return res.sendStatus(401);
		}

		const dbResult = await sql<
			OtherUserInfoObject[]
		>`select id, username, role, avatar from users where id = ${userId}`;

		if (!dbResult.length) return res.sendStatus(404); //Not found

		return res.json(dbResult[0]);
	}),
];
