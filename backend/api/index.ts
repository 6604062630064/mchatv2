import "module-alias/register";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const morgan = require("morgan");
const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 3000;
const authRouter = require("@/routes/authRouter");
const usersRouter = require("@/routes/usersRouter");
const roomsRouter = require("@/routes/roomsRouter");

app.use(cors());
app.use(morgan("combined"));
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
