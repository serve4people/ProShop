import express from "express";
// import products from "../data/products"
import asyncHandler from "express-async-handler";
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
import Product from "../models/productModel.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/toprated").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
