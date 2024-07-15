import { Router } from 'express';
import { getBlogs } from '../controllers/blog-controller'

const router = Router();

router.get('/blogs', getBlogs);

export default router;