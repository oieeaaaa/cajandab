// JSX
const jsxTemplate = (name) => {
  const componentName = name[0].toUpperCase() + name.substr(1);

  return `
import styles from "./${name}.module.scss";

const ${componentName} = () => <h1 className={styles.${name}}>Hello World</h1>;

export default ${componentName};`.trim();
};

// SCSS
const scssTemplate = (name) =>
  `@use "scss/main" as *;

.${name} {
  background-color: papayawhip;
}`.trim();

module.exports = {
  jsxTemplate,
  scssTemplate,
};
