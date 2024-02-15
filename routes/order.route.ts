import express from "express";
import { authorizeRoles, isAuthenticated } from "../utils/middleware/auth";
import {
  createOrder,
  getAllOrders,
  newPayment,
  sendStripePublishableKey,
} from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);

orderRouter.get(
  "/get-Orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);
orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);

orderRouter.post("/payment", isAuthenticated, newPayment);
export default orderRouter;
