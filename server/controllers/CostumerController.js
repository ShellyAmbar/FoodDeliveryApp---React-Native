const Costumer = require("../models/Costumer");

const updateCostumer = (req, res, next) => {
  let costumerId = req.body._id;
  let updateData = {
    ...req.body,
  };

  Costumer.findByIdAndUpdate(costumerId, { $set: updateData })
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
const deleteCostumer = (req, res, next) => {
  let costumerId = req.body.costumerId;
  Costumer.findByIdAndRemove(costumerId)
    .then(() => {
      res.json({
        message: "costumer deleted successfully.",
      });
    })
    .catch((err) => {
      res.json({
        message: "An error occured: " + err,
      });
    });
};

module.exports = {
  updateCostumer,
  deleteCostumer,
};
