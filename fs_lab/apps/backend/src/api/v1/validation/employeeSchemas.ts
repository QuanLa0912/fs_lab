import Joi from "joi";

export const createEmployeeSchema = Joi.object({
    department: Joi.string().trim().required(),
    firstName: Joi.string().trim().min(3).required(),
    lastName: Joi.string().trim().empty(""),
});
