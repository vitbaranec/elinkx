const express = require("express");
const { update, findByIdAndUpdate, findOneAndReplace } = require("../models/Post");
const router = express.Router();
const Post = require("../models/Post")


//GET - všechny data
router.get("/", async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({message: err});
    }  
});

//POST - pošle data
router.post("/", async (req, res) => {
    const post = new Post({
        name: req.body.name,
        contact: req.body.contact,
        servis: req.body.servis,
        years: req.body.years
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET - specifické data podle ID
router.get("/:postId", async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE - vymazat data podle ID
router.delete("/:postId", async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//PATCH - Aktualizace části POSTu
router.patch("/:postId", async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId}, 
            { $set: { name: req.body.name } } 
        );
        res.json(updatePost);
    } catch (err) {
    res.json({ message: err });
    }
});

//PUT - Aktualizace jenom name nebo desc
router.put("/:postId", async (req, res) => {
    try {
        const replacePost = await Post.findOneAndUpdate(
            { _id: req.params.postId },
            { name: req.body.name },
            { contact: req.body.contact },
            { servis: req.body.servis },
            { years: req.body.years }
        );
        res.json(replacePost);
    } catch (err) {
    res.json({ message: err });
    }
});

module.exports = router;