import express from 'express';
import studentController from '../Controller/SiswaController.js';
import { verifyToken, restrictTo } from '../Middleware/Auth.js';

const router = express.Router();

router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/', verifyToken, restrictTo('teacher'), studentController.getAllStudents);
router.get('/classes', verifyToken, restrictTo('teacher'), studentController.getClasses);
router.put('/:nis/progress', verifyToken, restrictTo('teacher'), studentController.updateProgress);
router.put('/:nis', verifyToken, restrictTo('teacher'), studentController.updateStudent);
router.delete('/:nis', verifyToken, restrictTo('teacher'), studentController.deleteStudent);
router.post('/progress', verifyToken, restrictTo('student'), studentController.updateOwnProgress);
router.get('/progress/:nis', verifyToken, studentController.getProgress);
router.post('/scores/:nis', verifyToken, restrictTo('teacher'), studentController.submitScore);
router.get('/scores/:nis', verifyToken, studentController.getScores);
router.get('/scores', verifyToken, restrictTo('teacher'), studentController.getAllScores);
router.post('/questions', verifyToken, restrictTo('teacher'), studentController.createQuestion);
router.get('/questions', verifyToken, studentController.getQuestions);
router.get('/questions/:id', verifyToken, studentController.getQuestionById);
router.put('/questions/:id', verifyToken, restrictTo('teacher'), studentController.updateQuestion);
router.delete('/questions/:id', verifyToken, restrictTo('teacher'), studentController.deleteQuestion);



export default router;