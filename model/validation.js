const Joi = require('joi')

const BlogVerification = (data) => {
    const schema = Joi.object().keys({
        title: Joi.string()
            .min(6)
            .max(155)
            .required(),

        description: Joi.string()
            .min(6)
            .required()
    })
    return schema.validate(data)
}

module.exports.BlogVerification = BlogVerification

