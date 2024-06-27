import { Request, Response, NextFunction } from "express";
import { UserInfoObject } from "@/types/user.type";
import dotenv from "dotenv";

dotenv.config();

const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = process.env;

declare module "express-serve-static-core" {
	interface Request {
		authenticated: boolean;
		userInfo: UserInfoObject;
	}
}

const checkAuthentication = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const web_session = req.cookies.web_session;
	if (!web_session) {
		req.authenticated = false;
		return next();
	}

	try {
		const jwtResult = jwt.verify(web_session, PRIVATE_KEY);
		req.authenticated = true;
		req.userInfo = jwtResult;
	} catch (err) {
		req.authenticated = false;
	}

	return next();
};
export default checkAuthentication;
