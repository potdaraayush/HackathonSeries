import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Only allows vite frontend URL
  methods: ["GET", "POST"], // Optional: Restrict allowed methods
  credentials: true         // Optional: Allow cookies/auth if needed
}));
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});