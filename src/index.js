

const express = require("express");

const error_midlware = require("./error-handler/Error-medlware")

require('dotenv').config()

const router = require("./Router/auth-Route")

const ConnectDB = require("./db")
const app = express();

app.use(express.json());
app.use("/api/auth", router);
app.use(error_midlware)

ConnectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
})

