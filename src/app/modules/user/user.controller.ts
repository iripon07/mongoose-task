import { NextFunction, Request, Response } from "express";
import { createBookToDB } from "./user.service";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const book = await createBookToDB();
  res.status(200).json({
    status: "success",
    data: book,
  });
};
