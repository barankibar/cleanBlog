const ejs = require("ejs");
const express = require("express");

const app = express();


// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/add", (req, res) => {
    res.render("add_post");
});

const port = 3000;
app.listen(port, () => console.log(`Server started on ${port} port`));
