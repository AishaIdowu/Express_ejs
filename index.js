const express = require("express");

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true})); //allows us to access content coming from body/forms

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "world" });
});

const router = require("./routes/users");
app.use("/users", router);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
