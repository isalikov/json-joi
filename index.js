const Joi = require('joi')

const getType = require('./utils/getType')

const defaultOptions = {
    null: false,
}

const instance = (data, options = defaultOptions) => {
    const types = {
        array: options.null ? Joi.array().allow(null) : Joi.array(),
        null: options.null ? Joi.any().allow(null) : Joi.any(),
        object: options.null ? Joi.object().allow(null) : Joi.object(),
    }

    if (data === null) {
        return types.null
    }

    if (Array.isArray(data) && !data.length) {
        return types.array
    }

    if (Array.isArray(data)) {
        return types.array.items(getType(data[0], instance, { null: options.null }))
    }

    if (typeof data === 'object' && !Object.keys(data).length) {
        return types.object
    }

    return types.object.keys(
        Object.keys(data)
            .reduce((result, key) => ({
                ...result,
                [key]: getType(data[key], instance, { null: options.null }),
            }), { })
    )
}

module.exports = instance
