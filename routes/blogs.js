const express = require('express')
const router = express.Router()
const Blog = require('../model/Blogs')
const { BlogVerification } = require('../model/validation')

//We can use both. either try, catch  OR  then().catch()

//Get all the posts
router.get('/', async (req, res) => {
    try {
        const getPosts = await Blog.find()
        res.json(getPosts)
    } catch (err) {
        res.status(400)
            .json({ message: err })
    }
})

//Get a specific post
router.get('/:postID', async (req, res) => {
    try {
        const specificPost = await Blog.findById(req.params.postID)
        res.json(specificPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//Post a blog
router.post('/', async (req, res) => {

    const { error } = BlogVerification(req.body)
    res.json(error.details[0].message)

    const blog = new Blog({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedBlog = await blog.save();
        res.json(savedBlog)
    } catch (err) {
        res.json({ message: err })
    }
})

//Delete a post
router.delete('/:postID', async (req, res) => {
    try {
        const deletedPost = await Blog.remove({ _id: req.params.postID })
        res.json(deletedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//Update a post
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Blog.updateOne({ _id: req.params.postID }, { $set: { description: req.body.description } })
        res.json(updatedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router