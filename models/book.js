import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedDate: Date,
    category: String,
    pages: Number,
    price: Number,
    publication: String,
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema, "books");
