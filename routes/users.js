const express = require("express"); 
const router = express.Router();
const booksdb = require("../models/bookModel");


router.post("/signup", async function(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const name = firstName + ' ' + lastName;

    const userData = booksdb.AddUser(name, email, password);

    res.sendStatus(200);
});

router.post("/login", async function(req, res) {
    const { email, password } = req.body;

    const userData = booksdb.LoginUser(email, password);

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