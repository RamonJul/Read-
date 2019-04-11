const router = require("express").Router();
const user=require("../controller/author");


module.exports=(passport)=>{
    router.route("/signup")
    .post(user.SignUp)
    
    
    router.route("/login",passport.authenticate("local"),{
        failureRedirect:"/login"

    })
    

    
    return router

};