import express from "express";
import { createBook } from "./user.controller";
const router = express.Router();

router.get("/", createBook);

export default router;
