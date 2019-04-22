const GithubStrategy=require("passport-github2").Strategy
const user=require("../controller/author");
const keys=require("./keys.js")
console.log(keys)
module.exports=((passport)=>{
    passport.use(  
    new GithubStrategy(
    {
       clientID:keys.id||"ccaa642cfb7447a32ab0",
       clientSecret:keys.secret||"9062cd20fb26ff484fba8ae84a10bd6e2c20b70d",
       callbackUrl: "http://localhost:3000/auth/login/callback"  
    },

    (accessToken,refreshToken,profile,cb)=>{
        process.nextTick(()=>{            
        user.Login(accessToken,refreshToken,profile,cb)
            // return cb(null, profile)

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