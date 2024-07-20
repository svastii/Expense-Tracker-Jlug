import bodyParser from "body-parser";
import express from "express";
import fetch from "node-fetch";
import notionRoute from "./retreiveDatabase.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(notionRoute);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "server is running successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
