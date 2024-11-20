import express from 'express';
import { getExample} from '../controllers/exampleController.js';

const router = express.Router();

router.get('/', getExample);

export default router;