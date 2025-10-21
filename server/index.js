import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));

await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/f25-auth");
console.log("✅ MongoDB connected");

// 2️⃣ Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || "supersecret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/f25-auth" }),
  cookie: { httpOnly: true, sameSite: "lax" }
}));

// 3️⃣ Basic test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// 4️⃣ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
