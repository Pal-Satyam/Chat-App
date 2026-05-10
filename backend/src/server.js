import express from "express";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";


// const app =express();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })); // CORS
app.use(cookieParser()); // req.cookies

app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes);



server.listen(PORT, ()=>{
    console.log("Server running on port:" + PORT);
    connectDB();
})
