import express, { Request, Response } from "express";
import blogRoutes from "./src/routes/blog-routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: [
    "https://blog-posts-web.vercel.app/",
    "http://localhost:5173/",
    "http://localhost:4173/",
  ],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
