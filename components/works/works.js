import useIntersectionObserver from "js/hooks/useIntersectionObserver";
import Card from "components/card/card";
import SectionLine from "components/sectionLine/sectionLine";
import styles from "./works.module.scss";

const Works = ({ works }) => {
  const [worksRef, entry] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      ref={worksRef}
      id="works"
      className={
        entry.isIntersected
          ? `${styles.works} ${styles.works___visible}`
          : styles.works
      }
    >
      <div className={`${styles.works_container} grid`}>
        <h3 className={styles.works__watermark}>The process</h3>
        <SectionLine title="works" />
        <div className={styles.works_list}>
          {works.map((work) => (
            <Card
              key={work.data.name}
              className={styles.works_list__item}
              {...work}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
