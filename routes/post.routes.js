const express = require("express");
const { CreatePost, getPosts, updatePost, deletePost, getPost, getPostsByType } = require("../controller/post.controller");
const router = express.Router();

router.get("/",getPosts)
router.get("/:id",getPost)
router.get("/type/:type",getPostsByType)

router.post("/",CreatePost)

router.put('/:id',updatePost)

router.delete('/:id',deletePost)


module.exports = router;