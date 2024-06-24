import { Router, Express, Request, Response } from "express";
const router = Router();

router.get("/:Userid", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.get("/:Userid/messages", (req: Request, res: Response) => {
	res.send("To be implemented");
});

router.post("/:Userid/messages", (req: Request, res: Response) => {
	res.send("To be implemented");
});

module.exports = router;
