const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
// const DBConnect = require("./utils/dbConnect");  

const app = require("./app");

// database connection
// DBConnect();
mongoose.connect(process.env.DATABASE_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connection established".red.bold))
  .catch(() => console.log("Database connection failed").red.bold);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}......`.yellow.bold);
});