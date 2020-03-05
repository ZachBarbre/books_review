const express = require("express"); 
const userModel = require("../models/usersModel");
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post("/signup", async function(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    const name = firstName + ' ' + lastName;
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(password, hash);

    const user = new userModel(null, name, email, hash);
    user.addUser();
    res.status(200).redirect('/');
});

router.post("/login", async function(req, res, next) {
    const { email, password } = req.body;

    const user = new userModel(null, null, email, password);
    user.logInUser();

    res.sendStatus(200);
});

router.get("/signup", async function(req, res) {
    res.render("template", {
        locals: {
            title: "signup"
        },
        partials: {
            partial: "partial-signup"
        }
    });
});

router.get("/login", async function(req, res) {
    res.render("template", {
        locals: {
            title: "login"
        },
        partials: {
            partial: "partial-login"
        }
    });
});

module.exports = router;