import styles from "./sectionLine.module.scss";

const SectionLine = ({ title }) => (
  <div className={styles.sectionLine}>
    <p className={styles.sectionLine__text}>
      {title}
      <em>()</em>;
    </p>
  </div>
);

export default SectionLine;

