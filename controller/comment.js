const db=require("../models")
const OP=db.Sequelize.Op
const comment_db=db.Comments;
module.exports={
  //show all categorie
    GetCategories:(req,res)=>{
        db.categories
        .findAll({})
        .then(dbCategories=> res.json(dbCategories))
    },
    //add a category
    MakeCategory:(req,res)=>{
      const newCategory={
        categories:req.body.category
      }
      db.categories.create(newCategory)
      .then(()=>{
        return res.sendStatus(200)
      }).catch(err=>{
        return res.sendStatus(400)
      })
    },

    //get all posts under a category
    GetPost:(req,res)=>{
       comment_db
        .findAll({
            where: {
                location: req.params.category,
              }
        }).then(dbPosts=>res.json(dbPosts)).then(()=> {
    });
    },
    //make a post or a comment
    MakePost:(req,res)=>{
      const newPost={
        post:req.body.post,
        title:req.body.title,
        author:req.body.author,
        location:req.params.category,
        image: req.body.image
      }
      if (req.params.id&&req.body.parentId) {//comment specific parameters
        newPost.postId = req.params.id
        newPost.location="comment"
        newPost.parentId = req.body.parentId;
      }
    
     comment_db.create(newPost)
     .then(()=>{
      return res.sendStatus(200)
    }).catch(err=>{
      return res.sendStatus(400)
    })
    },

    //grab all comments under a post
    GetComment:(req,res)=>{
      let filteredArray=[]
       comment_db.findAll({
            where: {
              postId: req.params.id
            }
          }).then((results)=> {
             filteredArray = results.map((result)=> {
              return result.dataValues;
            });
            filteredArray.sort((a, b)=> {
              return (a.parentId || 0) - (b.parentId || 0);
            });
            filteredArray.forEach((comment)=> {
              comment.children = [];
            });
            for (let i = filteredArray.length - 1; i >= 0; i--) {
              for (let j = i - 1; j >= 0; j--) {
                if (filteredArray[j].id === filteredArray[i].parentId) {
                  filteredArray[j].children.push(filteredArray[i]);
                  filteredArray.splice(i, 1);
                  break;
                }
              }
            }
              comment_db.findOne({
                where:{
                  id:req.params.id
                }
              }).then((result)=>{
                const post={
                  post:result,
                  comments:filteredArray
                }
                res.json(post);
              })
          });
    },
    //grab most recent created posts
    FindRecentPosts:(req,res)=>{
     comment_db
      .findAll({
          where:{
            location:{[OP.ne]:"comment"}
          },
          limit:10,
          order:[["createdAt","DESC"]]
      }).then((postsData)=>{

        res.send(postsData)
      })
    },
   
    //checks if comment is owned by the user
    CheckOwnerShip:(req,res)=>{
      comment_db
        .findAll({
            where:{
              id:req.params.id
            }
        }).then((commentData)=>{
            res.send(commentData.author===req.user.id)
        })

    },
    //delete comment
    DeleteComment:(req,res)=>{
        comment_db
          .destroy({
              where:{
                id:req.params.id
              }
          }).then((data)=>{
            res.status(200)

          })


    }

}


