const firebaseAuth = require("../firebase");

function authMiddleware(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    return response
      .status(401)
      .json({ message: "No token provided" });
  }
  const [ authorizationType, tokenValue ] = headerToken.split(" ");

  if (headerToken && authorizationType.toLowerCase() !== "bearer") {
    return response
      .status(401)
      .json({ message: "Invalid token" });
  }

  firebaseAuth
    .auth()
    .verifyIdToken(tokenValue)
    .then(() => next())
    .catch(() => response
      .status(403)
      .json({ message: "Could not authorize" })
    );
}

module.exports = authMiddleware;
