import { NextFunction, Request, Response } from "express";
import { createBookToDB, getBooksToDB } from "./user.service";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const book = await createBookToDB(data);
  res.status(200).json({
    status: "success",
    data: book,
  });
};

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getBooksToDB();
  res.status(200).json({
    status: "success",
    data: book,
  });
};
