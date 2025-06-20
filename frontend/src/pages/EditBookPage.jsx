import React from "react";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useParams, useNavigate } from "react-router-dom";
import bookModel from "../../../backend/models/book.model";

const EditBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5555/api/book/${id}`);
        const data = await res.json();
        setTitle(data.title);
        setAuthor(data.author);
        setPublishYear(data.publishYear);
      } catch (error) {
        setLoading(false);
        alert("Error happened, please check console");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleEditBook = () => {};

  return (
    <div>
      <div>EditBookPage</div>
      <div>
        <h1>Create Book</h1>
        <form onSubmit={handleEditBook}>
          <label htmlFor="title">Book Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
          />
          <label htmlFor="author">Author</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            id="author"
          />
          <label htmlFor="publishYear">Publication Year</label>
          <input
            onChange={(e) => setPublishYear(e.target.value)}
            type="number"
            id="publishYear"
          />
          <button type="submit">
            {loading ? (
              <ImSpinner9 size={20} className="animate-spin" />
            ) : (
              "Save Book"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookPage;
