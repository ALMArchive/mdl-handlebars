module.exports = function (cond1, cond2, val1, val2, options) {
  if (cond1
   && cond1 !== "false"
   && cond2
   && cond2 !== "false") {
    return val1;
  } else {
    return val2;
  }
}
