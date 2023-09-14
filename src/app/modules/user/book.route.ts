import express from "express";
import { getBookByGenre, getBookByRoli, getBooksRatedByBestSeller, getBooksUpdatedToInt } from "./book.controller";
const router = express.Router();

router.get("/get-by-genre", getBookByGenre);
router.get("/sci-fi", getBookByRoli);
router.put("/get-rate", getBooksRatedByBestSeller);
router.put("/get-int", getBooksUpdatedToInt);

export default router;
