const Joi = require('joi')
const { data, schemas } = require('./mocks')

const JsonJoi = require('../index')

describe('json-joi api', () => {
    test('to be defined', () => {
        expect(JsonJoi).toBeDefined()
    })

    test('to be function', () => {
        expect(typeof JsonJoi).toBe('function')
    })

    test('calls to be equal #0', () => {
        const schema = JsonJoi(
            data.object
        )

        expect(schema).toEqual(schemas.object)
    })

    test('calls to be equal #1', () => {
        const schema = JsonJoi(
            data.array
        )

        expect(schema).toEqual(schemas.array)
    })

    test('calls to be equal #2', () => {
        const schema = JsonJoi([])

        expect(schema).toEqual(
            Joi.array()
        )
    })

    test('calls to be equal #3', () => {
        const schema = JsonJoi([1, 2, 3])

        expect(schema).toEqual(
            Joi.array().items(
                Joi.number().unsafe()
            )
        )
    })

    test('calls to be equal #4', () => {
        const schema = JsonJoi([1, 2, 3], { null: true })

        expect(schema).toEqual(
            Joi.array().allow(null).items(
                Joi.number().allow(null).unsafe()
            )
        )
    })

    test('calls to be equal #5', () => {
        const schema = JsonJoi(null)

        expect(schema).toEqual(
            Joi.any()
        )
    })

    test('calls to be equal #6', () => {
        const schema = JsonJoi({})

        expect(schema).toEqual(
            Joi.object()
        )
    })
})
