import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./db.js";
import { ConfigCatProvider } from "@openfeature/config-cat-provider";
import { OpenFeature } from "@openfeature/server-sdk";

const app = express();
app.use(
	cors({
		origin: "*",
	}),
);
app.use(express.json());

// Create a provider with your SDK key
const provider = ConfigCatProvider.create(
	"configcat-sdk-1/IOjdCIhn9UyK5ZAfJsGYSw/dgb5PW9MBkitvG6IDslNtQ",
);

// Initialize the provider
OpenFeature.setProviderAndWait(provider);

// Create a client.
const client = OpenFeature.getClient();

app.get("/models", async (req, res) => {
	const email = req.headers["x-user-email"];

	if (!email) {
		return res.status(400).json({ message: "Email required" });
	}

	const context = {
		targetingKey: 1,
		email: email,
	};
	let modelsListEnabled = await client.getBooleanValue(
		"enableProModels",
		false,
		context,
	);

	if (modelsListEnabled) {
		const proModels = db.getModels("pro");
		console.log("Returning pro models...");
		res.json(proModels);
	} else {
		const standardModels = db.getModels("standard");
		console.log("Returning standard models...");
		res.json(standardModels);
	}
});

app.listen(3000, () =>
	console.log("Server is listening on: http://localhost:3000"),
);
