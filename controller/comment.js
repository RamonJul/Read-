const db=require("../models");
module.exports={
  //show all categorie
    GetCategories:(req,res)=>{
        db.categories
        .findAll({})
        .then(dbCategories=> res.json(dbCategories))
    },
    //add a category
    MakeCategory:(req,res)=>{
      const newCategory=req.body.category
      db.categories.create(newCategory)
    },

    //get all posts under a category
    GetPost:(req,res)=>{
        db.Comments
        .findAll({
            where: {
                location: req.params.category,
                ifComment: false
              }
        }).then(dbPosts=>res.json(dbPosts)).then(()=> {
          res.send(500)
    });
    },
    //make a post or a comment
    MakePost:(req,res)=>{
      const newPost={
        post:req.body.text,
        author:req.body.author,
        location:req.body.location
      }
      if (req.body.ifComment) {
        newPost.ifComment = req.body.ifComment;
      }
    
      if (req.body.postId) {
        newPost.postId = req.body.postId;
      }
    
      if (req.body.parentId) {
        newPost.parentId = req.body.parentId;
      }
    
      db.Comments.create(newPost).then(()=> {
            res.send(500)
      });
    },

    //grab all comments under a post
    GetComment:(req,res)=>{
        db.Comments.findAll({
            where: {
              postId: dbComment.dataValues.id
            }
          }).then(function(results) {
            var filteredArray = results.map(function(result) {
              return result.dataValues;
            });
            filteredArray.sort(function(a, b) {
              return (a.parentId || 0) - (b.parentId || 0);
            });
            filteredArray.forEach(function(comment) {
              comment.children = [];
            });
            for (var i = filteredArray.length - 1; i >= 0; i--) {
              for (var j = i - 1; j >= 0; j--) {
                if (filteredArray[j].id === filteredArray[i].parentId) {
                  filteredArray[j].children.push(filteredArray[i]);
                  filteredArray.splice(i, 1);
                  break;
                }
              }
            }
            // console.log(commentObj);
            // res.json(filteredArray[0]);
            res.render("comments", filteredArray[0]);
            // res.json(filteredArray);
          });
    },
    //grab most recent created posts
    FindRecentPosts:(req,res)=>{
      dbComment
      .findAll({
          limit:10,
          order:["createAt","DESC"]
      }).then((postsData)=>{

        res.send(postsData)
      })
    }
    }



