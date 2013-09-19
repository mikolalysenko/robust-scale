"use strict"

var twoProduct = require("two-product")
var twoSum = require("two-sum")

module.exports = scaleLinearExpansion

function scaleLinearExpansion(e, b, result) {
	var n = e.length
	var g
	if(result) {
		g = result
	} else {
		g = new Array(2 * n)
	}
	var q = [0.1, 0.1]
	var t = [0.1, 0.1]
	var count = 0
	twoProduct(e[0], b, q)
	if(q[0]) {
		g[count++] = q[0]
	}
	for(var i=1; i<n; ++i) {
		twoProduct(e[i], b, t)
		twoSum(q[1], t[0], q)
		if(q[0]) {
			g[count++] = q[0]
		}
		var a = t[1]
		var b = q[1]
		var x = a + b
		var bv = x - a
		var y = b - bv
		q[1] = x
		if(y) {
			g[count++] = y
		}
	}
	if(q[1]) {
		g[count++] = q[1]
	}
	if(count === 0) {
		g[count++] = 0.0
	}
	if(result) {
    if(count < g.length) {
      var ptr = g.length-1
      count--
      while(count >= 0) {
        g[ptr--] = g[count--]
      }
      while(ptr >= 0) {
        g[ptr--] = 0.0
      }
    }
		return g
	}
	g.length = count
	return g
}