import express from 'express';
const router = express.Router();
import controller from './controller.js';

router.get('/getuser',controller.getUser);
router.post('/createusers',controller.addUser);
router.put('/updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);

export default router;