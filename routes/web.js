import express from "express";
const router = express.Router();
import { homecontroller } from "../controllers/homecontroller.js";
import { register, login } from "../controllers/auth.js";

router.get("/", homecontroller);
router.get("/register", (req, res) => {
  res.render("register", { message: null });
});
router.get("/login", (req, res) => {
  res.render("login", { message: null });
});
router.post("/register", register);
router.post("/login", login);
export default router;
