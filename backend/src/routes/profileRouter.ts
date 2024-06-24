import { Router, Express, Request, Response } from "express";
const router = Router();

router.post("/avatar", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.post("/bio", (req: Request, res: Response) => {
	res.send("To be implemented");
});

module.exports = router;
