import { Router } from 'express';
import { getBlogs, postBlog, deleteBlog } from '../controllers/blog-controller'

const router = Router();

router.get('/blogs', getBlogs);

router.post('/blogs', postBlog);

router.delete('/blogs/:id', deleteBlog)

export default router;