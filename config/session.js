    
require('dotenv').config()

module.exports={
    cookie: {
        httpOnly: true,
        sameSite: true,
        secure: false, 
        maxAge: 60 * 60 * 1000 // 60 minutes
      },
      name: 'sessionId',
      secret: process.env.SessionSecret,
      resave: false,
      saveUninitialized: false,
      rolling: true,
    

}