const ejs = require("ejs");

const path = require("path");

const { execArgv } = require("process");

const express = require("express");

const app = express();

const {default: mongoose} = require("mongoose");

const Post = require(__dirname + "/models/Posts.js");

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
    const posts = await Post.find({});
    res.render("index", {
        posts
    });
    console.log(posts);
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/add", (req, res) => {
    res.render("add_post");
});

app.post("/AddNewPost", async (req, res) => {
    await Post.create(req.body);
    res.redirect("/");
});

const port = 3000;
app.listen(port, () => console.log(`Server started on ${port} port`));
