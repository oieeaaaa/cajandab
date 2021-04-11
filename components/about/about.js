import TextScramble from "components/textScramble/textScramble";
import SectionLine from "components/sectionLine/sectionLine";
import styles from "./about.module.scss";

const About = () => (
  <section id="about" className={styles.about}>
    <div className={`${styles.about_container} grid`}>
      <SectionLine title="about" />
      <article className={styles.about_article}>
        <p>
          I'm just a random guy who happened to love{" "}
          <TextScramble
            initialText="coding"
            texts={["coding", "designing", "learning", "and building stuff"]}
            timeOut={500}
          />
          .
        </p>
        <p>I don't have much experience working in freelance but...</p>
        <p>
          I would love to give it a try and work hard to gain that experience
          while helping others who don't want to deal with their tech and/or
          design problems.
        </p>
        <p>— Joimee</p>
      </article>
      <figure className={styles.about__image}>
        <img src="images/joimee.png" alt="Joimee Tan Cajandab" />
      </figure>
    </div>
  </section>
);

export default About;
