import { Router } from 'express';
import { registerUser, loginUser, getAllUsers, deleteUser } from '../controllers/user.controllers.js';

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/users").get(getAllUsers);         
router.route("/users/:id").delete(deleteUser);    

export default router;