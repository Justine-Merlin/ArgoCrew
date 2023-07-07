import express, { Router } from "express";
import serverless from "serverless-http";
import crewMemberRoutes from "../../routes/crewMember.routes";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);
api.use("/members/", crewMemberRoutes);

export const handler = serverless(api);
