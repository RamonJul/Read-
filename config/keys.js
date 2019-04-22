require("dotenv").config();
console.log(process.env.GithubId)
module.exports= 
{
    id: process.env.GithubId,
    secret: process.env.GithubSecret
}