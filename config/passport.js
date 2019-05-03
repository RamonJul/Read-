const GithubStrategy=require("passport-github2").Strategy
const user=require("../controller/author");
const keys=require("./keys.js")
module.exports=((passport)=>{
    passport.use(  
    new GithubStrategy(keys.Github,
    (accessToken,refreshToken,profile,cb)=>{
        process.nextTick(()=>{            
        user.Login(accessToken,refreshToken,profile,cb)

        })
       
    
    }
    ))


    passport.serializeUser((user,cb)=>{
        cb(null,user)
    })

    passport.deserializeUser((user,cb)=>{
        cb(null,user)
    })
})