var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hello node.js in Docker build again in Docker. Version 2");
});

app.listen(3000, () => {
    console.log("Server listen on port 3000");
});