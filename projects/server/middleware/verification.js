const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      let token = req.headers.authorization;
      if (!token) throw "Token is empty";
      token = token.split(" ")[1];
      if (token === null) throw "Unauthorized request";
      let verifiedUser = jwt.verify(token, secretKey);
      if (!verifiedUser) throw "Token verification failed";
      req.user = verifiedUser;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
