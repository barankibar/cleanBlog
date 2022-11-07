const ejs = require("ejs");

const path = require("path");

const { execArgv } = require("process");

const express = require("express");

const app = express();

const { default: mongoose } = require("mongoose");

const Post = require(__dirname + "/models/Posts.js");

const methodOverride = require("method-override");

const fileUpload = require("express-fileupload");

const pageController = require("./controllers/pageControllers");

const postController = require("./controllers/postController");

// Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES
app.get("/", postController.getAllPosts);
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/posts/edit/:id", pageController.getIndexPage);
app.get("/posts/:id", postController.getPosts);
app.put("/posts/:id", postController.updatePost);
app.post("/AddNewPost", postController.createPost);

const port = 3000;
app.listen(port, () => console.log(`Server started on ${port} port`));
