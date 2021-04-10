import styles from "./button.module.scss";

const Button = ({ children, variant, className, ...rest }) => {
  let classes = [styles.button];

  if (className) {
    classes = classes.concat(className);
  }

  if (variant === "link") {
    classes = classes.concat(styles.button___link);
  } else {
    classes = classes.concat(styles.button___default);
  }

  return (
    <button className={classes.join(" ")} {...rest}>
      {children}
    </button>
  );
};

export default Button;

