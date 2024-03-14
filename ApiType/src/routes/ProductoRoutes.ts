import express from 'express';
import { createProducto, getProductoById, updateProducto, deleteProducto } from '../controllers/ProductoController';

const router = express.Router();

router.post('/producto', createProducto);
router.get('/producto/:id', getProductoById);
router.put('/producto/:id', updateProducto);
router.delete('/producto/:id', deleteProducto);

export default router;
