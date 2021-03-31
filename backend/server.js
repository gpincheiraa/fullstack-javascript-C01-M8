const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authMiddleware = require("./auth");
const apiRouter = require("./routes");

const server = {
  enableCors(app) {
    // TODO: Intentar quitar cors que corriendo en local y en prod back y front se comuniquen sin problemas de cors
    const corsOptions = {
      origin: "http://localhost:8080",
    };
    app.use(
      cors(corsOptions)
    );
  },
  enablePublicFolder(app) {
    app.use(express.static(`${__dirname}/public`));
  },
  setRoutes(app) {
    app.use("/api", authMiddleware);
    app.use("/api", apiRouter);

    app.use((req, res, next) => {
      res.sendFile(`${__dirname}/public/index.html`);
    });
  },
  initialize() {
    const port = process.env.PORT || 3000;
    const environment = JSON.stringify(process.env.NODE_ENV);
    const app = express();

    this.enableCors(app);
    this.enablePublicFolder(app);
    this.setRoutes(app);

    app.listen(port, () => {
      console.log(
        `App is running on http://localhost:${port} in environment ${environment}`
      );
    });

    return app;
  },
};

module.exports = server.initialize();
