import { Router, Express, Request, Response } from "express";
const router = Router();

router.get("/google", (req: Request, res: Response) => {
	res.send("To be implemented");
});

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
