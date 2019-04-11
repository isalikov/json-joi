const Joi = require('joi')

module.exports = (type, instance = () => { }, options = { null: false }) => {
    if (type === null) {
        return Joi.any()
    }

    switch (typeof type) {
        case 'string':
            return options.null ? Joi.string().allow(null) : Joi.string()

        case 'number':
            return options.null ? Joi.number().allow(null) : Joi.number()

        case 'boolean':
            return options.null ? Joi.boolean().allow(null) : Joi.boolean()

        default:
            return instance(type)
    }
}
