import express from "express";
import User from "../model/userModel.js";
import { createuser } from "../controller/userController.js";

const router = express.Router();

router.post("/createuser",createuser);

export default router;
