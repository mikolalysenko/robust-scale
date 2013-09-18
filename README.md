robust-scale
============
Scales a nonoverlapping increasing sequence of floats by a single floating point value.

## Install

		npm install robust-scale
		
## Example

```javascript
var robustScale = require("robust-scale")

robustScale([1, 1e64], 2)
```

## API

### `require("robust-scale")(a, s[, result])`
Multiplies a nonoverlapping increasing sequence of floats by a float.

* `a` is the sequence to multiply
* `s` is the amount to scale `a` by.  Must be a single float
* `result` is an optional array that gets the result of the computation

**Returns** An array encoding the product `a*s`.

## Credits
Based on JRS robust geometry predicates

Implementation (c) 2013 Mikola Lysenko. MIT License
