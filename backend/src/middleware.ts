import { Request, Response, NextFunction } from "express";
import { cookie, validationResult } from "express-validator";
import { UserInfoObject } from "@/types/user.type";
import dotenv from "dotenv";

dotenv.config();

const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, GOOGLE_CLIENT_ID } = process.env;

declare module "express-serve-static-core" {
	interface Request {
		authenticated: boolean;
		userInfo?: UserInfoObject;
	}
}

const checkAuthentication = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const web_session = req.cookies.web_session;
	console.log(GOOGLE_CLIENT_ID);
	if (!web_session) {
		req.authenticated = false;
		return next();
	}

	try {
		console.log(PRIVATE_KEY);
		const jwtResult = jwt.verify(web_session, PRIVATE_KEY);
		req.authenticated = true;
		req.userInfo = jwtResult;
		return next();
	} catch (err) {
		req.authenticated = false;
		return next();
	}
};
export default checkAuthentication;
