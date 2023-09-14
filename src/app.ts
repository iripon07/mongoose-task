import cors from "cors";
import express, { Application } from "express";

const app: Application = express();

//Application routes
import userRoutes from "./app/modules/user/user.route";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/book", userRoutes);

export default app;
