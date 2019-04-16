const Joi = require('joi')

const exampleArray = require('./example.array.json')
const exampleObject = require('./example.object.json')

const exampleObjectSchema = Joi.object().keys({
    "key 1": Joi.string(),
    "key 2": Joi.number().unsafe(),
    "key 3": Joi.boolean(),
    "key 4": Joi.boolean(),
    "key 5": Joi.any(),
    "key 6": Joi.object().keys({
        "a": Joi.number().unsafe(),
        "b": Joi.number().unsafe(),
        "c": Joi.array().items(
            Joi.string(),
        ),
        "d": Joi.object().keys({
            "foo": Joi.string(),
            "bar": Joi.number().unsafe(),
        }),
    }),
    "key 7": Joi.array().items(
        Joi.object().keys({
            "x": Joi.number().unsafe(),
            "y": Joi.string(),
        })
    ),
})

const exampleArraySchema = Joi.array().items(
    exampleObjectSchema
)

exports.data = {
    array: exampleArray,
    object: exampleObject,
}

exports.schemas = {
    array: exampleArraySchema,
    object: exampleObjectSchema,
}
