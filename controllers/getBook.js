import { Book } from "../models";
import Joi from "joi";

const getBook = {
  async getABook(req, res) {
    const bookTitle = req.params.title;
    let result;
    try {
      result = await Book.findOne({ title: bookTitle }).select(
        "-__v -createdAt -updatedAt"
      );
      if (!result) {
        return res.json("The book doesn't exist in the database");
      }
    } catch (err) {
      return res.json(`Got some error: ${err}`);
    }
    res.json(result);
  },
  async getAllBook(req, res) {
    let result;
    try {
      result = await Book.find().select("-__v -createdAt -updatedAt");
      if (!result) {
        return res.json("There are no books in the database!");
      }
    } catch (err) {
      return res.json(`Got some error: ${err}`);
    }
    res.json(result);
  },
};

export default getBook;
