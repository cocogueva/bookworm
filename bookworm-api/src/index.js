  import express from "express";
import path from "path";

const app = express();

app.post("api/auth", (req, res) => {
  res.status(400).json({ errors: { global: "Invalid Credentials" } });
});

app.get("/*", (req, res) => {
  res.sendfile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("runnin in localhost:8080"));
