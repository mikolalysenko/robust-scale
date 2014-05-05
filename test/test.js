"use strict"

var robustScale = require("../robust-scale.js")
var validate = require("validate-robust-sequence")
var robustSum = require("robust-sum")

require("tape")(function(t) {

  t.same(robustScale([4], 2), [8])
  t.same(robustScale([1, 1e64], 2), [2, 2e64])
  t.same(robustScale([1], 1), [1])
  for(var i=0; i<100; ++i) {
    for(var j=0; j<100; ++j) {
      t.same(robustScale([i], j), [i*j])
    }
  }

  var s = robustScale([ -2.4707339790384e-144, -1.6401064715739963e-142, 2e-126 ], -10e-64)
  t.ok(validate(s))
  t.ok(s[s.length-1]<0)

  var sequences = [
    [0.3, 0.7, 0.1],
    [Math.random(), Math.random(), Math.random(), Math.random()],
    [-1, Math.random(), Math.random()-0.5, Math.random()]
  ]

  for(var j=0; j<sequences.length; ++j) {
    var seq = sequences[j]
    var r = [1]
    for(var i=0; i<seq.length; ++i) {
      var h = seq[i]
      r = robustScale(r, h)
      t.ok(validate(r))
    }
    var q = [-1]
    for(var i=seq.length-1; i>=0; --i) {
      q = robustScale(q, seq[i])
      t.ok(validate(q))
    }
    t.same(robustSum(q, r), [0])
  }

  t.end()
})