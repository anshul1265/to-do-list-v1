const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/data.js');

// console.log(date.getDate());

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.get("/", function (req, res) {

    // let day = date.getDate();
    let day = date.getDay();

    res.render('list', {
        listTitle: day,
        newListItems: items
    });

});

app.get("/work", function (req, res) {

    res.render('list', {
        listTitle: "Work",
        newListItems: workItems
    });

});

app.get("/about", function (req, res) {

    res.render('about');

});

app.post("/", function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3000, function (req, res) {
    console.log('server is up and running at port 3000.');
});