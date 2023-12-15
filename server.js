const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const expressEjsLayouts = require("express-ejs-layouts");

// database connection here===>
const url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


mongoose
  .connect(url, {
    dbName: "vegitable",
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
  })
  .then((c) => console.log(`database is connected`))
  .catch((e) => console.log(e));

const app = express();

const PORT = process.env.PORT || 3000;

// set Termplate engine
app.use(expressEjsLayouts);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

// assets web pages by get
app.use(express.static("public"));

// routes
require("./routes/web")(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
