import Joi from "joi";

export const createRoleSchema = Joi.object({
    role: Joi.string().trim().required(),
    firstName: Joi.string().trim().min(3).required(),
    lastName: Joi.string().trim().empty(""),
    pronouns: Joi.string().trim().empty(""),
});
