const Handlebars                 = require("handlebars");
const { lstatSync, readdirSync, readFileSync } = require('fs')
const { join }                   = require('path')

const getFiles = source =>
  readdirSync(source).map(name => ({
    ref: join(source, name),
    name: name.replace("_", "").replace(".hbs", "")
  }));

getFiles(join(__dirname, "templates")).map(function(e) {
  let file = `${readFileSync(e.ref)}`;
  Handlebars.registerPartial(e.name, file);
});
