import express from "express";
import { createBook, getBooks } from "./user.controller";
const router = express.Router();

router.get("/", getBooks);
router.post("/create-book", createBook);

export default router;
