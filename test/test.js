"use strict"

var robustScale = require("../robust-scale.js")

require("tape")(function(t) {

	t.same(robustScale([4], 2), [8])
	t.same(robustScale([1, 1e64], 2), [2, 2e64])
  t.same(robustScale([1], 1, [0,1]), [0,1])
  
  for(var i=0; i<100; ++i) {
    for(var j=0; j<100; ++j) {
      t.same(robustScale([i], j), [i*j])
    }
  }

  var s = robustScale([ -2.4707339790384e-144, -1.6401064715739963e-142, 2e-126 ], -10e-64)
  t.ok(s[s.length-1]<0)

	t.end()
})