const JWT = require('jsonwebtoken')


function verifyToken(req, res, next)
{
	const authHeader = req.headers.token
	if(authHeader)
	{
		const token = authHeader.split(" ")[1]
 		JWT.verify(token,"secret",(err,user)=>{
			if(err)  res.status(403).json("Token is not valid!")
 			req.user = user 
 			next()
		})
	}
	else
		res.status(401).json("you are not authenticated!")
}


module.exports =  verifyToken