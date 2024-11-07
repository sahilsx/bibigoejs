import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import web from "./routes/web.js";
import bodyParser from "body-parser";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
