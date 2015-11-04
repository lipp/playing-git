var sum = function(a, b) {
    return a + b;
};

var diff = function(a, b) {
    return a - b;
};

var mult = function(a, b) {
    return a * b;
};

var divide = function(a, b) {
  return a / b;
};

var pow = function(base, exp) {
    return Math.pow(base, exp);
};

module.exports = {
    sum: sum,
    diff: diff,
    mult: mult,
    divide: divide,
    pow: pow
};
