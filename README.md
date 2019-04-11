### json-joi

JSON to Joi Schema converter


##### Installation
```
npm install json-joi
```

##### Usage
```javascript
const JsonJoi = require('json-joi')

const JoiSchema = JsonJoi({
    "key 1": "Some String",
    "key 2": 100500,
    "key 3": false,
    "key 4": true,
    "key 5": null,
    "key 6": {
        "a": 1,
        "b": 3,
        "c": ["foo", "bar"],
        "d": {
            "foo": "foo",
            "bar": 0
        }
    },
    "key 7": [{
        "x": 100,
        "y": "nil"
    }]
})

expect(JoiSchema).toEqual(
    Joi.object().keys({
        "key 1": Joi.string(),
        "key 2": Joi.number(),
        "key 3": Joi.boolean(),
        "key 4": Joi.boolean(),
        "key 5": Joi.any(),
        "key 6": Joi.object().keys({
            "a": Joi.number(),
            "b": Joi.number(),
            "c": Joi.array().items(
                Joi.string(),
            ),
            "d": Joi.object().keys({
                "foo": Joi.string(),
                "bar": Joi.number(),
            }),
        }),
        "key 7": Joi.array().items(
            Joi.object().keys({
                "x": Joi.number(),
                "y": Joi.string(),
            })
        ),
    })
)
```

##### Options
```javascript
const options = {
    null: false, // if true, will add .allow(null) to each Joi call
}

// JsonJoi({}, options)
```
