
import jwt from "jsonwebtoken"
import secret from "../vars/var.js"

function authenticateToken(req, res, next) {
  console.log("bnj");
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token,secret.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
  export default authenticateToken;