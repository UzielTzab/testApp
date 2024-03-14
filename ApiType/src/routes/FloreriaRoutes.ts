import express from 'express';
import { createFloreria, getFloreriaById, updateFloreria, deleteFloreria } from '../controllers/FloreriaController';

const router = express.Router();

router.post('/florerias', createFloreria);
router.get('/florerias/:id', getFloreriaById);
router.put('/florerias/:id', updateFloreria);
router.delete('/florerias/:id', deleteFloreria);

export default router;
