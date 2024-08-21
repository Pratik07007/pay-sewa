import express from "express";

const PORT = process.env.PORT || 3007;
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "From Bank web hook" });
});

app.listen(PORT, () =>
  console.log(`Bank WebHook Running on http://localhost:${PORT}`)
);
