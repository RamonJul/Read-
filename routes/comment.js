const router = require("express").Router();
const commentController=require("../controller/comment");
router.route("/")
    .get(commentController.FindRecentPosts)
router.route("/:category")//go to a specific category and show all posts and  make a posts
    .get(commentController.GetPost)
    .post(commentController.MakePost)

router.route("/:category/:id")
    .get(commentController.GetComment)
    .post(commentController.MakePost)

router.route("/categorylist")
    .get(commentController.GetCategories)
    .post(commentController.MakeCategory)
module.exports=router;