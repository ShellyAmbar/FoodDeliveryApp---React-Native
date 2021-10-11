const Joi = require("joi");
const foodSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  type: Joi.string().alphanum().min(3).max(30).required(),

  photoPath: Joi.string().required(),
  price: Joi.number().integer().min(0).max(1000).required(),
  description: Joi.string().required(),
  stars: Joi.number().integer().min(0).max(20).required(),
}).with("name", "type", "photoPath", "price", "description", "stars");
