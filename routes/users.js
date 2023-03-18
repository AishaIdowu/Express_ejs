const express = require("express");
const router = express.Router();
router.use(logger); 


router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Retrieve user with Id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with Id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with Id ${req.params.id}`);
  });

//   Middleware
const users = [{ name: "Aisha" }, { name: "Rahman" }];
router.param("id", (req, res, next, id) => {
  // console.log(id);
  req.user = users[id];
  next();
});

// Middleware
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
  }

module.exports = router;
