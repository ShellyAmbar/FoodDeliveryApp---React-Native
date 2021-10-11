const mongoose = require("mongoose");
const EmplyeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: false,
    },
    photoPath: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    organisation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Emplyee = mongoose.model("EmployeesData", EmplyeeSchema);
module.exports = Emplyee;
