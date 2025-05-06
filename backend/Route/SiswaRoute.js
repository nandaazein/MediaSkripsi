import express from 'express';
import studentController from '../Controller/SiswaController.js';
import { verifyToken, restrictTo } from '../Middleware/Auth.js';

const router = express.Router();

router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/', verifyToken, restrictTo('teacher'), studentController.getAllStudents);
router.get('/classes', verifyToken, restrictTo('teacher'), studentController.getClasses);
router.put('/:nis/progress', verifyToken, restrictTo('teacher'), studentController.updateProgress);
router.delete('/:nis', verifyToken, restrictTo('teacher'), studentController.deleteStudent);
router.post('/progress', verifyToken, restrictTo('student'), studentController.updateOwnProgress);

export default router;