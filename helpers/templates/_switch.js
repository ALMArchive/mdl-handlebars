module.exports = function (val, cases, options) {
  cases = JSON.parse(cases);
  if(cases[val]) {
    return cases[val];
  } else if(cases["default"]) {
    return cases["default"];
  } else {
    return "";
  }
}
