import TextScramble from "components/textScramble/textScramble";
import styles from "./about.module.scss";

const About = () => (
  <section id="about" className={styles.about}>
    <div className={`${styles.about_container} grid`}>
      <div className={styles.about_decoration}>
        <p className={styles.about_decoration__text}>
          about<em>()</em>;
        </p>
      </div>
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
        <p>He is a very inquisitive and sometimes weird person.</p>
        <p>
          But I kid you not, He can kick some butt with hard-work, passion, and
          not to mention his determination to solve other people problems so he
          can make money out of it—joke.
        </p>
        <p>
          Hey friend, don't wanna deal with tech or design stuff? This guy can
          do it for ya.
        </p>
      </article>
      <figure className={styles.about__image}>
        <img src="images/joimee.png" alt="Joimee Tan Cajandab" />
      </figure>
    </div>
  </section>
);

export default About;

