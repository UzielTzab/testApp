import express from 'express';
import { createFloreria, getFloreriaById, updateFloreria, deleteFloreria, getAllFlowers } from '../controllers/FloreriaController';

const router = express.Router();

router.get('/florerias', getAllFlowers);
router.post('/florerias', createFloreria);
router.get('/florerias/:id', getFloreriaById);
router.put('/florerias/:id', updateFloreria);
router.delete('/florerias/:id', deleteFloreria);

export default router;
