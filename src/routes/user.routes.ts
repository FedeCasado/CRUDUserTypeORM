import { Router } from "express";
import { getUsers, createUsers, getUser, deleteUser, updateUser } from '../controllers/user.controller';
const router = Router();

router.get('/users', getUsers );    
router.post('/users',createUsers);
router.get('/users/:id', getUser);
router.put('/users/:id',updateUser)
router.delete('/users/:id', deleteUser);


export default router;