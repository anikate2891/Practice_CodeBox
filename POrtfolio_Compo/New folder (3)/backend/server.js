import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "All fields required" });
    }

    try {
        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
        });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject: `Portfolio Message from ${name}`,
        text: message,
    });

    res.status(200).json({ msg: "Message sent" });
        } catch (err) {
    res.status(500).json({ msg: "Error sending message" });
        }
    });

app.listen(3000, () => console.log("Server running on port 3000"));