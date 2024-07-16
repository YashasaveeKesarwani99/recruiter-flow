import { Request, Response } from "express";
import { Blog } from "../models/blogs";
import * as fs from "fs";
import * as path from "path";
import { generateRandomId } from "../utils/generateRandomId";
import { getCurrentDate } from "../utils/getCurrentDate";

const dataPath = path.join(__dirname, "../data/blogs.json");

const readBlogs = () => {
  if (!fs.existsSync(dataPath)) {
    return [];
  }
  fs.readFile(dataPath, "utf8", (err, data) => {
    if(err) {
        console.log(err)
        return []
    } else {
        return JSON.parse(data)
    }
  });
};

const writeBlogs = (blogs: Blog[]) => {
  fs.writeFileSync(dataPath, JSON.stringify(blogs, null, 2));
};

export const getBlogs = (req: Request, res: Response) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send({
        error: "Failed to read data!",
      });
    } else {
      const blogs: Blog[] = JSON.parse(data);
      res.status(200).json(blogs);
    }
  });
};

export const postBlog = (req: Request, res: Response) => {
    const newBlog:never | any= req.body;
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          console.log(err)
        } else {
          const blogs = JSON.parse(data);

          newBlog.id = generateRandomId();
          newBlog.date_published = getCurrentDate();
          if(blogs) {
            blogs.push(newBlog as never);
            writeBlogs(blogs);
    
            res.status(201).send(blogs);
        } else {
            res.status(400).send({
                message:"Cannot Add"
            })
        }
        }
      });
};

export const deleteBlog = (req: Request, res: Response) => {
    const blogId = parseInt(req.params.id, 10);
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
          let blogs = JSON.parse(data);

          if(blogs) {
            const initialLength = blogs.length;
    
            blogs = blogs.filter((blog:Blog) => blog.id !== blogId);
        
            if (blogs.length === initialLength) {
                return res.status(404).send({ message: 'Blog not found' });
            }
            writeBlogs(blogs);
    
            res.status(200).send({ message: 'Blog deleted successfully' });
        } else {
            return res.status(400).send({
                message: "Cannot delete"
            })
        }
        }
      });
}