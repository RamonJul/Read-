const router = require(`express`).Router();
const {isAuthenticated,AuthenticatedBoolean}=require(`./utils/isAuthenticated`)


module.exports=(passport)=>{
    //login or create a user
    router.get(`/auth/login/github`, 
    passport.authenticate(`github`,{scope:[`user:email`]}))
    router.get(`/auth/login/callback`,

        passport.authenticate(`github`,{
            successRedirect:`/`,
            failureRedirect:`/auth/login/github`
            }),(req,res)=>{
                    res.redirect(`/`)
            }
                

    )
    

    //logout user

    router.get(`/auth/logout`,isAuthenticated,(req,res)=>{
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
    router.get(`/auth/user`,checkAuth,(req,res)=>{

            return(req.user)
    })


//checks if user is authenticated
    router.route(`/auth/isAuthenticaed`)
        .get((req,res)=>{

            res.json(AuthenticatedBoolean(req))
        })    
    return router

};