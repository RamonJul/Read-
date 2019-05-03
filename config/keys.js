require("dotenv").config();

module.exports= 
{
   Github:{
    clientID: process.env.GithubId,
    clientSecret: process.env.GithubSecret,
    callbackUrl: process.env.callbackUrl||"/auth/login/callback"  
   } 
}