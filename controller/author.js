const User=require("../models").Authors

module.exports={
    Login:(username,password,done)=>{
        User.findOne({where:{userName:username}})
        .then((user)=>{
                if(err){
                    return done(err)
                }
                if(!user){
                    return done(null,false,{message:"Invalid Username"})
                }
                if(!user.password===password){
                    return done(null,false, {message:"Incorrect password"})
                }

        })
    },
    SignUp:(req,res)=>{
        var newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userNAME: req.body.userName,
            profilepic: req.body.profilepic
          };
          db.Authors.findOne({
            where: {
              email: req.body.email
            }
          }).then(function(res) {
            if (res.length > 0) {
              res.send({
                code: 204,
                success: "There is already an account with that email address."
              });
            } else {
              db.Authors.create(newUser).then(function(dbAuthor) {
                res.json(dbAuthor);
              });
            }
          });
    }
}