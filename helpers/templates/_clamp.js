module.exports = function (val, options) {
  let min = parseFloat(options.hash.min);
  let max = parseFloat(options.hash.max);
  const clamp = (val) => Math.min(Math.max(Math.round(val), min), max);
  return clamp(parseFloat(val));
}
