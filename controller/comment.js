const db=require("../models");
module.exports={
    GetCategories:(req,res)=>{
        db.categories
        .findAll({})
        .then(dbCategories=> res.json(dbCategories))
    },
    GetPosst:(req,res)=>{
        db.Comments
        .findAll({
            where: {
                location: req.params.category,
                ifComment: false
              }
        }).then(dbPosts=>res.json(dbPosts))
    },
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
        }
    }



}