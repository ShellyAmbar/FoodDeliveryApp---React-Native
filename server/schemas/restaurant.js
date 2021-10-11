const Joi = require("joi");
const foodObj = require("./food");
const { restaurantOwnerSchemaUpdate } = require("./RestaurantOwner");
const restaurantSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(50).required(),
  category: Joi.string().alphanum().min(3).max(30).required(),
  photoPath: Joi.string().required(),

  description: Joi.string().required(),
  stars: Joi.number().integer().min(0).max(20).required(),
  kosher: Joi.boolean().required(),
  address: Joi.string().required(),
  longitude: Joi.number().required(),
  latitude: Joi.number().required(),
  food: Joi.array().items(foodObj),
  foodTypes: Joi.array().items({ type: Joi.string().required() }),
  deliveryPrice: Joi.number().integer().min(0).max(1000).required(),
  owner: restaurantOwnerSchemaUpdate,
}).with(
  "name",
  "category",
  "photoPath",
  "description",
  "stars",
  "kosher",
  "address",
  "longitude",
  "latitude",
  "food",
  "foodTypes",
  "deliveryPrice"
);
