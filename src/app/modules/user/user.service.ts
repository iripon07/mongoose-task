import Book from "./user.model";

export const createBookToDB = async () => {
  const book = await new Book({
    title: "Book 1",
    author: ["Author 1", "Author 2"],
    genre: "Mystery",
    publicationYear: 2020,
    publisher: { name: "Publisher A", location: "City A" },
    reviews: [
      { user: "User 1", comment: "Great book!" },
      { user: "User 2", comment: "Interesting plot" },
    ],
    rating: 4.5,
    price: "90",
  });
  console.log(book);
  await book.save();
  return book;
  
};
