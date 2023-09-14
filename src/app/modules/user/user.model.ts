import { Schema, model } from "mongoose";
import { IBook } from "./user.interface";

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: [String],
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Book = model<IBook>("Book", bookSchema);
export default Book;
