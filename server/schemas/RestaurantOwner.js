const Joi = require("joi");
const restaurantOwnerSchemaRegister = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  address: Joi.string(),
}).with("firstName", "lastName", "email", "phone", "address", "password");

const restaurantOwnerSchemaUpdate = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),

  address: Joi.string(),
}).with("firstName", "lastName", "email", "phone", "address");

const restaurantOwnerShemaLogin = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
}).with("email", "password");

export {
  restaurantOwnerSchemaRegister,
  restaurantOwnerSchemaUpdate,
  restaurantOwnerShemaLogin,
};
