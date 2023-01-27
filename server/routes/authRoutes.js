const express = require('express');
const router = express.Router();
import { requireSignin } from '../middleware/auth';

import { signUp, signIn, totalJobs } from '../controllers/auth.js';

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);

router.get('/total-jobs', requireSignin, totalJobs);

module.exports = router;
