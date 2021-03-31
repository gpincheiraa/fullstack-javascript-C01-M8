const firebaseAuth = require("../firebase");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response
      .send({ message: "No token provided" })
      .status(401);
  }
  const [ authorizationType, tokenValue ] = headerToken.split(" ");

  if (headerToken && authorizationType !== "Bearer") {
    return response
      .send({ message: "Invalid token" })
      .status(401);
  }

  firebaseAuth
    .auth()
    .verifyIdToken(tokenValue)
    .then(() => next())
    .catch(() => response
      .send({ message: "Could not authorize" })
      .status(403)
    );
}

module.exports = authMiddleware;
