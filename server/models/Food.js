const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },

    photoPath: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
