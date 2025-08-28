import express, { json } from "express";
import contactRoutes from "./route/contact.js";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";
import morgan from "morgan";
const app = express();
const allowedOrigins = [
  "http://localhost:5173", // for local dev
  "https://samuelportfolio-nu.vercel.app", // your deployed frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // if you're sending cookies or tokens
  })
);
app.use(morgan("dev"));
app.use(json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.disable("x-powered-by");
app.get("/", (req, res) => {
  res.send("Hello Instashots server");
});

app.use("/api/contact", contactRoutes);

app.use((req, res, next) => {
  return next(createHttpError(404, `Route ${req.originalUrl} not found`));
});

//handle specifc app errors
app.use((error, req, res, next) => {
  console.error(error);
  let errorMessage = "Internal Server Error";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: error.message });
});

export default app;
