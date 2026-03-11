import express from "express";
import { createUser, getUserProfile } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/:id", getUserProfile);
router.post("/", createUser);

export default router;
