const Deliver = require("../models/Deliver");

const updateDeliver = (req, res, next) => {
  const deliverId = req.body._id;

  const updateData = {
    ...req.body,
  };

  Deliver.findByIdAndUpdate(deliverId, { $set: updateData })
    .then(() => {
      res.json({
        message: "Updated",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};

const deleteDeliver = (req, res, next) => {
  let deliverId = req.body.deliverId;
  console.log("deliverId", deliverId);
  Emplyee.findByIdAndRemove(deliverId)
    .then(() => {
      res.json({
        message: "deliver deleted successfully.",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getDeliver = (req, res, next) => {
  let deliverId = req.query.deliverId;
  Emplyee.findById(deliverId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};
const getDelivers = (req, res, next) => {
  Emplyee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};

module.exports = {
  updateDeliver,
  deleteDeliver,
  getDeliver,
  getDelivers,
};
