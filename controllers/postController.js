const Post = require("../models/Posts");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort("-dateCreated");
  res.render("index", {
    posts,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);

  res.redirect("/");
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();

  res.redirect(`${req.params.id}`);
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.getPosts = async (req, res) => {
  const post = await Post.findOne({ id: req.params.id });
  res.render("post", {
    post,
  });
};
