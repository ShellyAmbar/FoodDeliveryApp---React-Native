const mongoose = require("mongoose");
const User = require("./User");
const OrderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: String,
      required: true,
    },
    food: {
      type: [Food],
      required: true,
    },

    deliveryPrice: {
      type: Number,
      required: false,
    },
    customer: {
      type: User,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Orders", OrderSchema);
module.exports = Order;
