const router = require(`express`).Router();
const {isAuthenticated,AuthenticatedBoolean}=require(`./utils/isAuthenticated`)
const UserContr=require(`./../controller/author`)
const passport=require("passport")


    //login or create a user
    router.route(`/auth/login/github`).get(passport.authenticate(`github`,{scope:[`user:email`]}))



    router.route(`/auth/login/callback`).get(
        
        passport.authenticate(`github`,{
            failureRedirect:`/auth/login/github`
            }),(req,res)=>{
                    res.redirect(`http://localhost:3000/`)
            }
                
    )
    

    //logout user

    router.route(`/auth/logout`).get(isAuthenticated,(req,res)=>{

        req.logOut();
        req.session.destroy((err)=>{
            console.log(`LOGGING OUT`)
            if(!err){
                res.status(200)
                .clearCookie(`sessionId`,{path:`/`})
                .redirect(`/`)
            }

        })
        
    })


    //grab user information
router.get(`/auth/user`,isAuthenticated,(req,res)=>{

            res.json(req.user)
    })


//checks if user is authenticated
    router.route(`/auth/isAuthenticaed`)
        .get((req,res)=>{
            res.json(AuthenticatedBoolean(req))
        })    


// grab any users information
    router.route(`/user/:id`)
        .get(UserContr.UserName)


module.exports= router

