import express from 'express';
import { getProducts, getProduct, createProduct, editProduct, deleteProduct} from '../controller/product.controller.js';

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getProduct);

router.put("/:id", editProduct);

router.delete("/:id", deleteProduct);

export default router;