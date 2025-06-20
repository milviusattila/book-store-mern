import React from "react";
import BookCard from "../components/BookCard";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("http://localhost:5555/api/books");
      const data = await res.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default HomePage;
