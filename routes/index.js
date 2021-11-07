import express from "express";
const router = express.Router();
import { addBook, getBook, deleteBook, updateBook } from "../controllers";

router.post("/addBook", addBook);
router.get("/getABook/:title", getBook.getABook);
router.get("/getAllBook", getBook.getAllBook);
router.put("/updateBook/:title", updateBook);
router.delete("/deleteBook/:title", deleteBook);

export default router;
