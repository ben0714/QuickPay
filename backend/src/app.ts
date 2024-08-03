// src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
import bodyParserErrorHandler from "express-body-parser-error-handler";
import apiRoutes from "./routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(compression());
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(helmet());
app.use(cors());

// body parser error handlers
app.use(bodyParserErrorHandler());

app.use("/api", apiRoutes);

export default app;
