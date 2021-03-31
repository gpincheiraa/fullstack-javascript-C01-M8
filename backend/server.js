const express = require("express");
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
    const app = express();

    this.enableCors(app);
    this.enablePublicFolder(app);
    this.setRoutes(app);

    return app;
  },
};

module.exports = server;
