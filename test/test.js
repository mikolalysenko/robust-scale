"use strict"

var robustScale = require("../robust-scale.js")

require("tape")(function(t) {

	t.same(robustScale([4], 2), [8])
	t.same(robustScale([1, 1e64], 2), [2, 2e64])
  
  t.same(robustScale([1], 1, [0,1]), [0,1])

	t.end()
})