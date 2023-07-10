import express, { Router } from "express";
import serverless from "serverless-http";
import "./config/db";
const crewMemberRoutes = require("../../routes/crewMember.routes");
const crewMemberController = require("../../controllers/crewMember.controller");
const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/members", crewMemberController.getMembers);
router.post("/members/register", crewMemberController.addMember);
router.put("/members/:id", crewMemberController.updateMember);
router.delete("/members/:id", crewMemberController.deleteMember);

api.use("/api/", router);
// api.use("/members/", crewMemberRoutes);

export const handler = serverless(api);
