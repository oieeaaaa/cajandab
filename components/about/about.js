import TextScramble from "components/textScramble/textScramble";
import SectionLine from "components/sectionLine/sectionLine";
import styles from "./about.module.scss";

const About = () => (
  <section id="about" className={styles.about}>
    <div className={`${styles.about_container} grid`}>
      <SectionLine title="about" />
      <article className={styles.about_article}>
        <p>
          A guy who loves{" "}
          <TextScramble
            initialText="coding"
            texts={["coding", "designing", "and learning"]}
            timeOut={500}
          />
          .
        </p>
        <p>He is very inquisitive and sometimes weird.</p>
        <p>
          But I kid you not, He can kick some butt with hard-work, passion, and
          not to mention his determination to solve problems so he can get paid
          and buy ramens.
        </p>
        <p>Peace out.</p>
      </article>
      <figure className={styles.about__image}>
        <img src="images/joimee.png" alt="Joimee Tan Cajandab" />
      </figure>
    </div>
  </section>
);

export default About;
