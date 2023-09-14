import { IBook } from "./book.interface";
import Book from "./book.model";

export const getBooksByGenreFromDB = async (
  genre: string
): Promise<IBook[]> => {
  const books = await Book.find({ genre: genre });
  return books;
};

export const getBooksByRoliBooksFromDB = async (
  genre: string
): Promise<IBook[]> => {
  const books = await Book.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books",
  });
  return books;
};

export const retrieveBookByRatingFromDB = async () => {
  const books = await Book.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ["rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        },
      },
    },
  ]);

  return books;
};

export const updatedBooksPrice = async () => {
  const books = await Book.updateMany(
    {
      publicationYear: { $gt: 2020 },
      price: { $type: "string" },
    },
    {
      $set: { price: { $toInt: "$price" } },
    }
  );

  return books;
};
