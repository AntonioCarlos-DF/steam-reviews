import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import reviewsRoutes from "./routes/reviews.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/reviews", reviewsRoutes);

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("✅ MongoDB conectado!");
    app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
  })
  .catch((err) => console.error("❌ Erro na conexão com Mongo:", err));
