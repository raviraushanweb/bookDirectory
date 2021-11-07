import { Book } from "../models";
import Joi from "joi";

const updateBook = async (req, res) => {
  const { title, author, publishedDate, category, pages, price, publication } =
    req.body;
  const bookTitle = req.params.title;
  //validation
  const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishedDate: Joi.date(),
    category: Joi.string(),
    pages: Joi.number(),
    price: Joi.number(),
    publication: Joi.string(),
  });
  const { error } = bookSchema.validate(req.body);

  if (error) {
    return res.json(`There are some errors: ${error}`);
  }

  let result;

  try {
    const bookExist = await Book.findOne({ title: req.body.title });
    if (!bookExist) {
      return res.json("Book doesn't exist!");
    }

    result = await Book.findOneAndUpdate(
      { title: bookTitle },
      {
        title,
        author,
        publishedDate,
        category,
        pages,
        price,
        publication,
      },
      { new: true }
    );
  } catch (err) {
    return res.json(`errors are: ${err}`);
  }

  res.json(result);
};

export default updateBook;
