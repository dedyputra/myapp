import express from "express";
import {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
} from "../controllers/ProductControllers.js";

const router = express.Router();

// membuat route

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.post('/products', saveProduct);
router.path('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


export default router;