"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.postBlog = exports.getBlogs = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const generateRandomId_1 = require("../utils/generateRandomId");
const getCurrentDate_1 = require("../utils/getCurrentDate");
const dataPath = path.join(__dirname, "../data/blogs.json");
const readBlogs = () => {
    if (!fs.existsSync(dataPath)) {
        return [];
    }
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return [];
        }
        else {
            return JSON.parse(data);
        }
    });
};
const writeBlogs = (blogs) => {
    fs.writeFileSync(dataPath, JSON.stringify(blogs, null, 2));
};
const getBlogs = (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send({
                error: "Failed to read data!",
            });
        }
        else {
            const blogs = JSON.parse(data);
            res.status(200).json(blogs);
        }
    });
};
exports.getBlogs = getBlogs;
const postBlog = (req, res) => {
    const newBlog = req.body;
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            const blogs = JSON.parse(data);
            newBlog.id = (0, generateRandomId_1.generateRandomId)();
            newBlog.date_published = (0, getCurrentDate_1.getCurrentDate)();
            if (blogs) {
                blogs.push(newBlog);
                writeBlogs(blogs);
                res.status(201).send(blogs);
            }
            else {
                res.status(400).send({
                    message: "Cannot Add"
                });
            }
        }
    });
};
exports.postBlog = postBlog;
const deleteBlog = (req, res) => {
    const blogId = parseInt(req.params.id, 10);
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            let blogs = JSON.parse(data);
            if (blogs) {
                const initialLength = blogs.length;
                blogs = blogs.filter((blog) => blog.id !== blogId);
                if (blogs.length === initialLength) {
                    return res.status(404).send({ message: 'Blog not found' });
                }
                writeBlogs(blogs);
                res.status(200).send({ message: 'Blog deleted successfully' });
            }
            else {
                return res.status(400).send({
                    message: "Cannot delete"
                });
            }
        }
    });
};
exports.deleteBlog = deleteBlog;
