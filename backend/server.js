const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const authMiddleware = require("./auth")

const app = express();


// TODO: Intentar quitar cors que corriendo en local y en prod back y front se comuniquen sin problemas de cors
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/products", authMiddleware);
app.use("/", router);

const port = process.env.PORT || 3000;
const environment = JSON.stringify(process.env.NODE_ENV);

app.listen(port, () => {
  console.log(
    `App is running on http://localhost:${port} in environment ${environment}`
  );
});
