import express, { Router } from "express";
import serverless from "serverless-http";

import crewMemberRoutes from "../../routes/crewMember.routes";

const api = express();

// const router = Router();
// api.use("/members", crewMemberRoutes);

api.use("/api/", crewMemberRoutes);

export const handler = serverless(api);
