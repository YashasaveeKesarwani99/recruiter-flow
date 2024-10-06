"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_routes_1 = __importDefault(require("./src/routes/blog-routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: ["https://blog-posts-swart.vercel.app/", "http://localhost:4173/"],
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/api", blog_routes_1.default);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
