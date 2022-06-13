import express from "express";
let router = express.Router();
import homeController from "../controller/homeController ";

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage); // chia route
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getEditPage);
  router.post("/update-user", homeController.postUpdateUser);
  router.get("/about", (req, res) => {
    // route con
    res.send(`I'm Eric!`);
  });

  return app.use("/", router); // để hiển thị trang home
};

export default initWebRoute;
