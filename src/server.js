import express from "express";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();
import initWebRoute from "./route/web";

const app = express();
const port = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
// app.get("/", (req, res) => {
//   res.render("test/index.ejs");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
