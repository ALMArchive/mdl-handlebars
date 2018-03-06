module.exports = function (options) {
  let hashes = JSON.parse(options.hash.hrefs);
  hashes = Array.isArray(hashes) ? hashes : [hashes];
  let genLink = (href) => `<link rel="stylesheet" href="${href}">`
  return hashes.map(e => genLink(e)).join("\n  ");
}
