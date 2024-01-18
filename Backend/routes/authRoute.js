import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPassController,
  updateProfileController,
  getAllOrdersController,
  getOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

//routing
//Register || Method Post

router.post("/register", registerController);

//LOGIN || POST

router.post("/login", loginController);

//forgot password

router.post("/forgot-password", forgotPassController);

//testroute

router.get("/test", requireSignIn, isAdmin, testController);

//protected route-path for user

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route-path for admin

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update user profile

router.put("/profile", requireSignIn, updateProfileController);

//orders

router.get("/orders", requireSignIn, getOrdersController);

//all orders for admin

router.get("/all-orders", requireSignIn, getAllOrdersController);

//order update status

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
