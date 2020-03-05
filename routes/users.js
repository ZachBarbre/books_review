const express = require("express"); 
const userModel = require("../models/usersModel");
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post("/signup", async function(req, res, next) {
    const { firstName, lastName, email, password } = req.body;
    const name = firstName + ' ' + lastName;
    const hash = password;
    const user = new userModel(null, name, email, hash);
    user.addUser();
    res.sendStatus(200);
});

router.post("/login", async function(req, res, next) {
    const { email, password } = req.body;



    res.sendStatus(200);
});

router.get("/:signup", async function(req, res) {
    res.render("template", {
        locals: {
            title: "signup"
        },
        partials: {
            partial: "partial-signup"
        }
    });
});

router.get("/", async function(req, res) {
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