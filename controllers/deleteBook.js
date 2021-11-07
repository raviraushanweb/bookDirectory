import { Book } from "../models";

const deleteBook = async (req, res) => {
  const bookTitle = req.params.title;

  let result;
  try {
    result = await Book.findOneAndRemove({ title: bookTitle });
    if (!result) {
      return res.json("There is nothing to delete!");
    }
  } catch (err) {
    return res.json(`Got some error: ${err}`);
  }
  res.json(result);
};

export default deleteBook;
