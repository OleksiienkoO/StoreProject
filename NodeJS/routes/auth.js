var express = require("express");
var router = express.Router();

const user = {
    login: "oleksiienko.oo",
    password: "Qwe123123++",
};

router.post("/login", function(req, res, next) {
    const { login, password } = req.body;

    if (login === user.login && password === user.password) {
        res.status(200).json({
            message: "Login successful",
            token: "ashasdbsdsadjasdj121wadsjahd1w1w",
        });
    } else {
        res.status(401).json({ message: "Invalid login or password" });
    }
});

module.exports = router;