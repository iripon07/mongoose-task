import { NextFunction, Request, Response } from "express";
import {
  getBooksByGenreFromDB,
  getBooksByRoliBooksFromDB,
  retrieveBookByRatingFromDB,
} from "./book.service";

export const getBookByGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const genre = req.query.genre;
  const data = genre ? genre : "Fantasy";
  const book = await getBooksByGenreFromDB(data as string);
  res.status(200).json({
    status: "success",
    data: book,
  });
};

export const getBookByRoli = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const genre = req.query.genre;
  console.log(genre);
  const data = genre ? genre : "Sci-Fi";
  const book = await getBooksByRoliBooksFromDB(data as string);
  res.status(200).json({
    status: "success",
    data: book,
  });
};


export const getBooksRatedByBestSeller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await retrieveBookByRatingFromDB();
  res.status(200).json({
    status: "success",
    data: book,
  });
};


export const getBooksUpdatedToInt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await retrieveBookByRatingFromDB();
  res.status(200).json({
    status: "success",
    data: book,
  });
};

