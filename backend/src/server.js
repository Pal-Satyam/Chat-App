import express from "express";
import { ENV } from "./lib/env.js";

import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";



const app =express();

const PORT = ENV.PORT || 3000;

app.use(express.json()); // req.body

app.use("/api/auth",authRoutes);
app.use("/api/messages",messagesRoutes);



app.listen(PORT, ()=>{
    console.log("Server running on port:" + PORT);
    connectDB();
})
