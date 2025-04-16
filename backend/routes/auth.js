const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"],
}));

router.get("/google/callback", 
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard", 
    failureRedirect: "http://localhost:5173/signin",
  })
);

router.get("/user", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("http://localhost:5173");
  });
});

module.exports = router;
