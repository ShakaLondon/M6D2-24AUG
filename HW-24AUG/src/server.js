import express from "express";

import cors from "cors";

import services from "./services/index.js";

import path, { dirname } from "path";

import { fileURLToPath } from "url";

import createDefaultTables from "./scripts/create-tables.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const publicDirectory = path.join(__dirname, '../Client');

const app = express();

app.use(express.json());

app.use(cors());

const { PORT } = process.env;

app.use(express.static(publicDirectory))
app.use("/", services);

app.listen(PORT, async () => {
	await createDefaultTables();
	console.log(`✅ Server is running on port  ${PORT}`);
});

app.on("error", (error) => console.log(`❌ Server is failed  :  ${error}`));
