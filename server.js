const db =require("./models")
const express = require("express");
const commentRoutes=require("./routes/comment")
const passport=require("passport")
const session=require("express-session")
const app = express();
const cookieParser=require("cookie-parser")
const PORT = process.env.PORT || 3000;
const path=require("path")
require("./passport")(passport)
const userroutes=require("./routes/user")(passport)
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret:"hello"
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
//) Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(commentRoutes);
app.use(userroutes);


app.get("*", (req, res)=> {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// If running a test, set syncOptions.force to true
// clearing the `testdb`
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

});

module.exports = app;
