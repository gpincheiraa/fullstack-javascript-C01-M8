const Models = require("./models");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const initServer = () => {
  app.use(
    cors({
      origin: "http://localhost:8080",
    })
  );

  app.use(express.static(`${__dirname}/public`))
  app.get("/products", async (req, res) => {
    const products = await Models.Product.findAll();
    return res.status(200).json(products);
  });

  app.get("*", (req,res) => {
    res.sendFile(`${__dirname}/public/index.html`);
  });

  app.listen(port, () => {
    console.log(
      `App is running on http://localhost:${port} in environmet ${JSON.stringify(process.env.ENV)}`
    );
  });
};

initServer();
