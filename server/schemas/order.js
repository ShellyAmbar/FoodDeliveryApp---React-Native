const Joi = require("joi");
const foodObj = require("./food");
const { costumerSchemaUpdate } = require("./costumer");

const orderSchema = Joi.object({
  totalPrice: Joi.number().integer().min(0).max(1000).required(),
  food: Joi.array().items(foodObj),
  deliveryPrice: Joi.number().integer().min(0).max(1000).required(),
  customer: costumerSchemaUpdate,
  status: Joi.string().alphanum().min(3).max(30).required(),
}).with("totalPrice", "food", "deliveryPrice", "customer");
