const express = require("express")
const authController = require("../controllers/authController")
const router = express.Router()

router
.route("/signup")
.post(authController.signUp)
// .post(postController.createPost)

router
.route("/login")
.post(authController.login)
// router
// .route("/:id")
// .get(postController.getOnePost)
// .patch(postController.updatePost)
// .put(postController.updatePost)
// .delete(postController.deletePost)

module.exports = router