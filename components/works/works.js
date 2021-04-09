import { useRef, useState, useEffect } from "react";
import Card from "components/card/card";
import styles from "./works.module.scss";

const Works = ({ works }) => {
  // refs

  const worksRef = useRef(null);

  // states

  const [isIntersecting, setIsIntersecting] = useState(false);

  // effects

  useEffect(() => {
    if (!worksRef.current) return;

    const { current: works } = worksRef;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(works);
  }, [worksRef]);

  return (
    <section
      ref={worksRef}
      id="works"
      className={
        isIntersecting
          ? `${styles.works} ${styles.works___visible}`
          : styles.works
      }
    >
      <div className={`${styles.works_container} grid`}>
        <h3 className={styles.works__watermark}>The process</h3>
        <div className={styles.works_decoration}>
          <p className={styles.works_decoration__text}>
            works<em>()</em>;
          </p>
        </div>
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

