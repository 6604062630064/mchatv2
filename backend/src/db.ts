import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME } = process.env;
const PORT = Number(DB_PORT);

const sql = postgres({
	host: DB_HOST,
	port: PORT,
	database: DB_NAME,
	username: DB_USER,
	password: DB_PASSWORD,
});

export default sql;
