module.exports = function (cond, val1, val2, options) {
  if (cond && cond !== "false") {
    return val1;
  } else {
    return val2;
  }
}
