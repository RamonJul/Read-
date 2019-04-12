const localStrategy=require("passport-local").Strategy
const user=require("./controller/author");


module.exports=((passport)=>{
    passport.use(new localStrategy((username,password,done)=>
       user.Login(username,password,done)

    ))
    passport.serializeUser((user,done)=>{
        done(null,user)
    })

    passport.deserializeUser((user,done)=>{
        done(null,user)
    })
})