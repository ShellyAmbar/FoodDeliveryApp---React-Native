const mysql = require("mysql");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const EmployeeRoutes = require("./routes/Employee");
const AuthRoutes = require("./routes/Auth");
const UserRoutes = require("./routes/User");

const mongoUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@42blt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("Success mongoose"))
  .catch(() => console.log("failure mongoose"));

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running"));
app.use("/api/employee", EmployeeRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
