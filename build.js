//:: Object -> Object
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clone = function clone(source) {
  return Array.isArray(source) ? Array.from(source) : Object.assign(Object.create(Object.getPrototypeOf(source)), source);
};

/*
 * We need to bulk change properties on a cloned object's proto
 */

//:: [path] -> val -> Source -> Target
var changePath = function changePath(path, val, dict) {
  var result = clone(dict);
  var end = path.reduce(function (accum, k, i) {
    if (path.length - 1 === i) {
      accum[k] = val;
    } else {
      var blank = typeof k == "number" ? [] : {};
      accum[k] = accum[k] ? clone(accum[k]) : blank;
    }
    return accum[k];
  }, result);
  return result;
};
exports.changePath = changePath;

