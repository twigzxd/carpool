const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const app = express();

const users = require("./routes/api/user");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/post");

app.use(cors());

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport.js")(passport);

// Routes
app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/post", posts);

const port = process.env.PORT || 5000;

// The host for the web-app
let path = require('path');
// const webserver = express();
const serveStatic =require('serve-static');
const serve = serveStatic(path.join(__dirname, 'carpool-ui/dist/carpool-ui'), {'index': ['index.html', 'index.htm']});

app.use(serve);
app.listen(port, () => console.log(`Server running on port ${port}`));
// webserver.listen(5000, () => console.log('Web server successfully running on 3000'));
