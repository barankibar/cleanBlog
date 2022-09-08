const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    const blog = {
        id: 1,
        title: "Blog title",
        description: "Blog description"
    }
})

app.listen(port, (req, res) => {
    console.log(`Server started on ${port} port`);
})