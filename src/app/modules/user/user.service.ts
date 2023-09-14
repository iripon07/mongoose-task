import { IBook } from "./user.interface";
import Book from "./user.model";

export const createBookToDB = async (payload: IBook): Promise<IBook> => {
  const book = await new Book(payload);
  await book.save();
  return book;
};

export const getBooksToDB = async () => {
  const books = await Book.find();
  return books;
};
