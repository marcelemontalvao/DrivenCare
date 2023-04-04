import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import patientRoutes from "./routes/patientsRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use([patientRoutes])

const PORT = process.env.PORT;

app.listen(() => {
    console.log(`Server is running! Port: ${PORT}`)
});
