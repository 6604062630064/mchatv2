import { Router, Express, Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.get("/:userid/messages", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.post("/:userid/messages", (req: Request, res: Response) => {
	res.send("To be implemented");
});

module.exports = router;
