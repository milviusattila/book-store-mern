import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/book.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;
app.use(cors());

app.use(express.json());
app.use("/api/books", bookRoutes);

// Connect to MongoDB

app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server is running on port ${PORT}`);
  });
});
