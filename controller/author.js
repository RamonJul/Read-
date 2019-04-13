const User=require("../models").Authors

module.exports={
    Login:(username,password,done)=>{
        User.findOne({where:{userNAME:username}})
        .then((user)=>{
                if(!user){
                    return done(null,false,{message:"Invalid Username"})
                }
                if(!user.password===password){

                    return done(null,false, {message:"Incorrect password"})
                }
                // console.log("-----------------------")
                // console.log(user)
                // console.log("-----------------------")
              let sessionID=user.dataValues.id
              console.log(sessionID)
               return done(null,sessionID)

        }).catch(err=>{

          return done(err)
        })
    },
    SignUp:(req,res)=>{
       const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userNAME: req.body.userName,
            profilepic: req.body.profilepic
          };
        User.findOne({
            where: {
              email: req.body.email
            }
          }).then((data)=> {
            if (data) {
              res.send({
                code: 204,
                success: "There is already an account with that email address."
              });
           
            
              } else {
                User.create(newUser).then((dbAuthor)=> {
                  res.json(dbAuthor);
                });
            } 
          });
    }
}