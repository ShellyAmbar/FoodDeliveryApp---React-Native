const Costumer = require("../models/Costumer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Deliver = require("../models/Deliver");

const registerDeliver = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      console.log("bcryptErr:", err);
      res.json({
        error: err,
      });
    }

    let deliver = new Deliver({
      ...req.body,
      password: hashedPass,
      userType: "Deliver",
    });

    deliver
      .save()
      .then((deliver) => {
        let token = jwt.sign(
          { name: deliver.email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
          }
        );
        let refreshToken = jwt.sign(
          { name: deliver.email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
          }
        );

        return res.json({
          message: "deliver added succesfully",
          token,
          refreshToken,
          deliver,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          message: "Error in adding deliver" + err,
        });
      });
  });
};
const registerCostumer = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, 10, function (err, hashedPass) {
    if (err) {
      console.log("bcryptErr:", err);
      res.json({
        error: err,
      });
    }

    let costumer = new Costumer({
      ...req.body,
      password: hashedPass,
      userType: "Costumer",
    });

    costumer
      .save()
      .then((costumer) => {
        let token = jwt.sign(
          { name: costumer.email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
          }
        );
        let refreshToken = jwt.sign(
          { name: costumer.email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
          }
        );

        return res.json({
          message: "costumer added succesfully",
          token,
          refreshToken,
          costumer,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          message: "Error in adding costumer" + err,
        });
      });
  });
};

const loginCostumer = (req, res, next) => {
  const { email, password } = req.body;

  Costumer.find({ email })
    .then((costumer) => {
      if (costumer) {
        bcrypt.compare(password, costumer.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign(
              { name: costumer.email },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
              }
            );
            let refreshToken = jwt.sign(
              { name: costumer.email },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
              }
            );

            res.json({
              message: "Login Success",
              token,
              refreshToken,
              costumer,
            });
          } else {
            res.json({
              message: "Password does noe match",
            });
          }
        });
      } else {
        res.json({
          message: "Failed to login - costumer not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed to login:" + err,
      });
    });
};

const loginDeliver = (req, res, next) => {
  const { email, password } = req.body;
  Deliver.find({ email })
    .then((deliver) => {
      if (deliver) {
        bcrypt.compare(password, deliver.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            let token = jwt.sign(
              { name: deliver.email },
              process.env.ACCESS_TOKEN_SECRET,
              {
                expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
              }
            );
            let refreshToken = jwt.sign(
              { name: deliver.email },
              process.env.REFRESH_TOKEN_SECRET,
              {
                expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRE_TIME,
              }
            );

            res.json({
              message: "Login Success",
              token,
              refreshToken,
              deliver,
            });
          } else {
            res.json({
              message: "Password does noe match",
            });
          }
        });
      } else {
        res.json({
          message: "Failed to login - deliver not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Failed to login:" + err,
      });
    });
};

const logout = (req, res, next) => {
  // let refreshToken = req.body.refreshToken;
  // let token = req.body.token;
  // jwt.destroy(refreshToken);
  // jwt.destroy(token);
  console.log("logout");
  res.status(200).json({
    message: "token destroyed successfully.",
    refreshToken: "",
    token: "",
  });
};

const refreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    function (err, decode) {
      if (err) {
        res.status(400).json({
          err,
        });
      } else {
        let token = jwt.sign(
          { name: decode.name },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRE_TIME,
          }
        );
        let refreshtoken = req.body.refreshToken;
        res.status(200).json({
          message: "token refreshed successfully.",
          token,
          refreshToken,
        });
      }
    }
  );
};
module.exports = {
  registerCostumer,
  registerDeliver,
  loginCostumer,
  loginDeliver,
  refreshToken,
  logout,
};
