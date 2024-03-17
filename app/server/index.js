import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import axios from 'axios';

import openAiRoutes from "./routes/openai.js";

/* config */

dotenv.config();
const app = express();

// Use helmet middleware for securing HTTP headers
app.use(helmet());

// Use helmet middleware for Cross-Origin Resource Policy
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Use morgan for HTTP request logging
app.use(morgan("common"));

// Use bodyParser for parsing JSON requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// Use bodyParser for parsing URL-encoded requests
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Enable CORS for all routes
app.use(cors());


// Routes
app.use('/openai', openAiRoutes)


/* server setup */

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
