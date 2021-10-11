const mongoose = require("mongoose");
const Food = require("./Food");
const RestaurantOwner = require("./RestaurantOwner");
const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    photoPath: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    kosher: {
      type: Boolean,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    food: {
      type: [Food],
      required: true,
    },
    foodTypes: {
      type: [String],
      required: true,
    },
    deliveryPrice: {
      type: Number,
      required: false,
    },
    Owner: {
      type: RestaurantOwner,
      required: true,
    },
  },
  { timestamps: true }
);
const Restaurant = mongoose.model("Restaurants", RestaurantSchema);
module.exports = Restaurant;
