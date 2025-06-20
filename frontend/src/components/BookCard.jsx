import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 m-2 rounded shadow-lg">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published: {book.publishYear}</p>
      <button className="border">Details</button>
      <button className="border">Update</button>
      <button className="border">Delete</button>
    </div>
  );
};

export default BookCard;
