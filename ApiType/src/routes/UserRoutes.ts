// routes/UserRoutes.ts
import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserByEmailAndPassword, getUserById, updateUser } from '../controllers/UserController';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:email/:password', getUserByEmailAndPassword);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
