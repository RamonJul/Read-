const router = require("express").Router();
const commentController=require("../controller/comment");

router.route("/api/recent")
    .get(commentController.FindRecentPosts)


router.route("/api/category/:category")//go to a specific category and show all posts and  make a posts
    .get(commentController.GetPost)
    .post(commentController.MakePost)


router.route("/api/category/:category/id/:id")//go to post and look at all the comments
    .get(commentController.GetComment)
    .post(commentController.MakePost)

router.route("/api/categorylist")// show all of the categories
    .get(commentController.GetCategories)
    .post(commentController.MakeCategory)

router.route("/api/comment/:id")// checks if a user can delte a comment
    .get(commentController.CheckOwnerShip)
    .delete(commentController.DeleteComment)



    
module.exports=router;