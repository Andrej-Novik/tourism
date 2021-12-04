import express from "express";
import objectsRoutes from "./objects";

const app = (express.Application = express());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/objects", objectsRoutes);

export default app;
