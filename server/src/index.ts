import express, { Request, Response } from 'express';
import blogRoutes from './routes/blog-routes'
import cors from 'cors'

const app = express();
const port = process.env.PORT  || 4000;

app.use(cors())
app.use(express.json())
app.use('/api', blogRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})