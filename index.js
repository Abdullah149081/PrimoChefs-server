const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefRecipes = require("./data/chefRecipes.json");

app.get("/", (req, res) => {
  res.send("primoChefs is running");
});

app.get("/chefAllData", (req, res) => {
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`primoChefs app listening on port ${port}`);
});
