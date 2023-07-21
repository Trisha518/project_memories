import express from 'express';

import { addUser, authenticate, getAll } from '../controllers/users.js';

const router = express.Router();

router.post('/add', addUser);
router.post('/authenticate', authenticate);
router.get('/getall', getAll);

export default router;