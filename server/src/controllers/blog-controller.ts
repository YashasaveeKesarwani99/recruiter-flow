import { Request, Response } from 'express';
import { Blog } from '../models/blogs';
import * as fs from 'fs';
import * as path from 'path';

const dataPath = path.join(__dirname, '../data/blogs.json');

export const getBlogs = (req: Request, res: Response) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if(err) {
            res.status(500).send({
                error: 'Failed to read data!'
            })
        } else {
            const blogs: Blog[] = JSON.parse(data);
            res.status(200).json(blogs)
        }
    })
}