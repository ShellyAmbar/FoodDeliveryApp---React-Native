const Joi = require("joi");
const costumerSchemaRegister = Joi.object({
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

  longitude: Joi.string(),
  latitude: Joi.string(),

  address: Joi.string(),
}).with(
  "firstName",
  "lastName",
  "email",
  "phone",
  "longitude",
  "latitude",
  "address",
  "password"
);

const costumerSchemaUpdate = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  longitude: Joi.string(),
  latitude: Joi.string(),

  address: Joi.string(),
}).with(
  "firstName",
  "lastName",
  "email",
  "phone",
  "longitude",
  "latitude",
  "address"
);

const costumerShemaLogin = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
}).with("email", "password");

export { costumerSchemaRegister, costumerSchemaUpdate, costumerShemaLogin };
