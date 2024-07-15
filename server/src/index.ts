import express, { Request, Response } from 'express';
import blogRoutes from './routes/blog-routes'

const app = express();
const port = process.env.PORT  || 4000;

app.use(express.json())
app.use('/api', blogRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})