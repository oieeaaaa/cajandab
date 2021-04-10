import styles from "./form.module.scss";

export const Field = ({ className, children, ...rest }) => {
  let classes = [styles.form__field];

  if (className) {
    classes = classes.concat(className);
  }

  return (
    <div className={classes.join(" ")} {...rest}>
      {children}
    </div>
  );
};

export const Input = (props) => (
  <input className={styles.form_input} {...props} />
);

export const TextArea = ({ children, ...rest }) => (
  <textarea
    className={[styles.form_input, styles.form_textarea].join(" ")}
    {...rest}
  >
    {children}
  </textarea>
);

const Form = () => <h1 className={styles.form}>Hello World</h1>;

export default Form;
