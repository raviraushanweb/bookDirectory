import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";
import routes from "./routes";
import path from "path";

const app = express();

//db connection (mongodb)
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB connected...");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", routes);

//homepage
app.get("/", (req, res) => {
  res.json("Homepage of booksDirectory");
});

const PORT = process.env.PORT || APP_PORT;
app.listen(PORT, () => console.log(`server running on ${PORT} ...`));
