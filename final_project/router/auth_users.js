
const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();



const users = [];

const isValid = (username) => { //returns boolean
    //wrte code to check is the username is valid
    if (username.length < 5) {
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return false;
        }
    }
}

const authenticatedUser = (username, password) => { //returns boolean
    //write code to check if username and password match the one we have in records.
    if (username || password === "") {
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }


}

//only registered users can login
regd_users.post("/login", (req, res) => {
    //Write your code here
    const username = req.body.username;
    const password = req.body.password;
    return res.status(300).json({ message: "Yet to be implemented" });
});


module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
