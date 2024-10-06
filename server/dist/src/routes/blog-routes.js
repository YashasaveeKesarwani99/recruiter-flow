"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controller_1 = require("../controllers/blog-controller");
const router = (0, express_1.Router)();
router.get('/blogs', blog_controller_1.getBlogs);
router.post('/blogs', blog_controller_1.postBlog);
router.delete('/blogs/:id', blog_controller_1.deleteBlog);
exports.default = router;
