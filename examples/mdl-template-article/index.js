const fs = require("fs");
const Handlebars = require('handlebars');

require("../../index.js");
require("./pages");
require("./partials");

let template = Handlebars.compile(`{{> index}}`);

let context = {};

let html = template(context);
console.log(html);

fs.writeFileSync("./index.html", html);
