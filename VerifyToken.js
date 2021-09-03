const jwt = require("jsonwebtoken")

// Token Verify
function verify(req, res, next) {
  // Function
  const authHeader = req.headers.token;
  // If user has token then
  if (authHeader) {
    // (" ") < "space" and [1] for object position
    const token = authHeader.split(" ")[1];

    // Locate and Verify the Token
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not Valid!");
      req.user = user;
      next();
    })
    // else
  } else {
    return res.status(401).json("You are not Authenticated")
  }
}

module.exports = verify;