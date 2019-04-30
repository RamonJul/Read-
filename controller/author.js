const User=require("../models").Authors

module.exports={
    //checks if the user exits or not then logs them in
    Login:(accessToken,refreshToken,profile,cb)=>{
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
                      //add the user obj in req to store user information
                      return cb(err)
                    })
                }
                else{
                  return cb(null,user)
                }
        }).catch(err=>{

          return cb(err)
        })
    },


    //grab any user information
    UserName:(req,res)=>{ 
      User.findOne({where:{id:req.parmas.id}})
      .then((user)=>{
          res.json(user)
      })
    }
  }