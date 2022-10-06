import { Router } from "express";
import {
  getProducts,
  getSingleProduct,
  postProduct,
} from "../Controllers/productController.js";
const router = Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.get("/:id", getSingleProduct);

export default router;