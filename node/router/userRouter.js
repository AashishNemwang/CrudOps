import express from 'express';
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUsers } from '../controller/userController.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/getAllUsers', getAllUsers);
router.put('/updateUser/:id', updateUsers);
router.delete('/deleteUser/:id', deleteUser);
router.get("/getSingleUser/:id", getSingleUser);

export default router;