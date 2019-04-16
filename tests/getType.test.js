const Joi = require('joi')

const getType = require('../utils/getType')

describe('json-joi utils :: getType', () => {
    test('to be defined', () => {
        expect(getType).toBeDefined()
    })

    test('to be function', () => {
        expect(typeof getType).toBe('function')
    })

    test('to be string', () => {
        const type = getType('foo bar')

        expect(type).toEqual(Joi.string())
    })

    test('to be number', () => {
        const type = getType(100500)

        expect(type).toEqual(Joi.number().unsafe())
    })

    test('to be any for null', () => {
        const type = getType(null)

        expect(type).toEqual(Joi.any())
    })

    test('to be boolean for true', () => {
        const type = getType(true)

        expect(type).toEqual(Joi.boolean())
    })

    test('to be boolean for false', () => {
        const type = getType(false)

        expect(type).toEqual(Joi.boolean())
    })

    test('to be undefined', () => {
        const type = getType({})

        expect(type).toBe(undefined)
    })
})

