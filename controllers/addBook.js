import { Book } from "../models";
import { DOMAIN } from "../config";
import Joi from "joi";
const addBook = async (req, res) => {
  const { title, author, publishedDate, category, pages, price, publication } =
    req.body;
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

  //prepare the model
  const book = new Book({
    title,
    author,
    publishedDate,
    category,
    pages,
    price,
    publication,
  });

  let result;

  try {
    const bookExist = await Book.findOne({ title: req.body.title });
    if (bookExist) {
      return res.status(400).json("Book already exist!");
    }

    result = await book.save();
  } catch (err) {
    return res.status(500).json(`errors are: ${err}`);
  }
  res.status(200).send("Book added successfully!");
  //res.redirect(`${DOMAIN}/addbook.html`);
};

export default addBook;
