import Book from "../models/book.model.js";
import express from "express";

// CREATE A NEW BOOK
export const createNewBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json(book);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(400).json({ message: "Invalid book data", error });
  }
};

// GET ALL BOOKS
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// FETCHING A BOOK BY ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// UPDATE A BOOK BY ID
export const updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found", error });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error updating book by ID:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// DELETE A BOOK BY ID
export const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book by ID:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
