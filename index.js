const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefRecipes = require("./data/chefRecipes.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("primoChefs is running");
});

app.get("/chefAllData", (req, res) => {
  res.send(chefRecipes);
});

app.get("/chefAllData/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefRecipes.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`primoChefs app listening on port ${port}`);
});
