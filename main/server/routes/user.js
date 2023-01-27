import { requireSignin } from '../middleware/auth';
import formidable from 'express-formidable';

const express = require('express');
const router = express.Router();

import {
  publishJob,
  getAllJobs,
  uploadPFP,
  updatePFP,
  updateProfile,
  deleteJob,
  getJob,
  getMyJobs,
} from '../controllers/user';

router.post('/publish-job', requireSignin, publishJob);
router.get('/get-alljobs:page', requireSignin, getAllJobs);
router.post(
  '/upload-profilepic',
  requireSignin,
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadPFP
);
router.post('/update-profilepic', requireSignin, updatePFP);
router.put('/update-profile', requireSignin, updateProfile);
router.put('/delete-job', requireSignin, deleteJob);
router.get('/get-job/:_id', requireSignin, getJob);
router.get('/get-myjobs', requireSignin, getMyJobs);

module.exports = router;
