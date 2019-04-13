const router = require("express").Router();
const user=require("../controller/author");


module.exports=(passport)=>{
    router.route("/auth/signup")//making and account
    .post(user.SignUp)
    
    
    router.post("/auth/login",passport.authenticate("local",{
        successRedirect:"/",
        failureRedirect:"/auth/login"
    }),(req,res)=>{
            res.redirect("/")
    }
            

    )
    

    
    return router

};