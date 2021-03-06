const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  console.log('verifying"')
  let token = req.headers.token;
  if (!token) return res.status(401).send({ auth: false, message: 'NO TOKEN PROVIDED' });        

  jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      console.log("Token is valid");
      res.locals.token = decoded;
      next();
  })
  ;
}


module.exports = verifyToken;