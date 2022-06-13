import express from "express";

const configViewEngine = (app) => {
  // cấu hình để hiển thị ra view
  app.use(express.static("./src/public")); // cấu hình để nhận css
  app.set("view engine", "ejs"); // cấu hình view engine là ejs
  app.set("views", "./src/views"); // tìm file ejs ở đâu
};

export default configViewEngine;
