const fs = require("fs");
const path = require("path");
const { jsxTemplate, scssTemplate } = require("./templates");

const name = process.argv[2];

function createComponent(name) {
  if (!validateComponentName(name)) return;

  const componentPath = path.resolve(__dirname, "../", "components", name);
  const jsPath = path.resolve(componentPath, `${name}.js`);
  const scssPath = path.resolve(componentPath, `${name}.scss`);

  if (fs.existsSync(componentPath)) return; // component exists do nothing

  // create the component's folder
  fs.mkdirSync(componentPath);

  // then add files
  fs.appendFileSync(scssPath, scssTemplate(name));
  fs.appendFileSync(jsPath, jsxTemplate(name));
}

function validateComponentName(name) {
  try {
    switch (true) {
      case name.length < 3:
        throw "Component's name is too short, minimum of 3 letters.";
      case /[^A-Za-z]/g.test(name):
        throw "Component's name should only contain letters.";
      case name.length > 50:
        throw "Component's name is too long, maximum of 50 letters.";
      default:
        return true;
    }
  } catch (err) {
    console.error(new Error(err));
    return false;
  }
}

createComponent(name);
