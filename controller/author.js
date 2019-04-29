const User=require("../models").Authors

module.exports={
    Login:(accessToken,refreshToken,profile,cb)=>{
        console.log("loggin you in!!!!!!1")
        User.findOne({where:{githubId:profile.id}})
        .then((user)=>{
                if(!user){
                    const {name,email,id,login,avatar_url}=profile._json
                    const newUser={
                      name: name,
                      email: email,
                      githubId:id,
                      userNAME: login,
                      profilepic:avatar_url
                    };
                   User.create(newUser).then((CreatedUser)=> {
                    return cb(null,CreatedUser)
                    }).catch(err=>{
                      return cb(err)
                    })
                }
                else{
                  console.log(user)
                  return cb(null,user)
                }
        }).catch(err=>{

          return cb(err)
        })
    },

    UserName:(req,res)=>{
      User.findOne({where:{id:req.parmas.id}})
      .then((user)=>{
          res.json(user)
      })
    }
  }