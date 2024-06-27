import { Router, Express, Request, Response } from "express";
const usersControllers = require("@/controllers/usersControllers");
const router = Router();

router.get("/", usersControllers.userList_GET);
router.get("/:userId", usersControllers.userInfo_GET);

router.get("/:userId/messages", usersControllers.messages_GET);

router.post("/:userId/messages", usersControllers.messages_POST);

module.exports = router;
