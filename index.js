const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("primoChefs is running");
});

app.listen(port, () => {
  console.log(`primoChefs app listening on port ${port}`);
});
