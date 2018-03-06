const Handlebars                 = require("handlebars");
const { lstatSync, readdirSync, readFileSync } = require('fs')
const { join }                   = require('path')

const getFiles = source =>
  readdirSync(source).map(name => ({
    ref: join(source, name),
    name: name.replace("_", "").replace(".js", "")
  }));

getFiles(join(__dirname, "templates")).map(function(e) {
  let func = require(e.ref);
  Handlebars.registerHelper(e.name, func);
});
