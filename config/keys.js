require("dotenv").config();

module.exports= 
{
   Github:{
    clientID: process.env.GithubId,
    clientSecret: process.env.GithubSecret,
    callbackUrl: "https://fathomless-inlet-59388.herokuapp.com/auth/login/callback"  
   } 
}