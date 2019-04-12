const router = require("express").Router();
const commentController=require("../controller/comment");
router.route("/")
    .get(commentController.FindRecentPosts)
router.route("/api/category/:category")//go to a specific category and show all posts and  make a posts
    .get(commentController.GetPost)
    .post(commentController.MakePost)


router.route("/api/category/:category/id/:id")//go to post and look at all the comments
    .get(commentController.GetComment)
    .post(commentController.MakePost)

router.route("/categorylist")// show all of the categories
    .get(commentController.GetCategories)
    .post(commentController.MakeCategory)


    
module.exports=router;