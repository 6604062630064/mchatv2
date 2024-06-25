import { Router, Express, Request, Response } from "express";
const authControllers = require("@/controllers/authControllers");
const router = Router();

router.post("/google", authControllers.google_POST);

router.get("/loggedin", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.get("/loggedin", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.post("/login", (req: Request, res: Response) => {
	res.send("To be implemented");
});

module.exports = router;
