import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

const CreateBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveBook = async (event) => {
    event.preventDefault();
    const data = { title, author, publishYear };

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5555/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to create book");
      }
      console.log("Book created successfully:", data);
      navigate("/");
    } catch (error) {
      console.error("Error creating book:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create Book</h1>
      <form onSubmit={handleSaveBook}>
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
  );
};

export default CreateBookPage;
