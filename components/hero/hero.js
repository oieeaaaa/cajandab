import { ReactSVG } from "react-svg";
import Link from "next/link";
import TextScramble from "components/textScramble/textScramble";
import styles from "./hero.module.scss";

const Hero = () => {
  const fancyTexts = ["websites", "e-commerce", "blogs", "etc..."];

  return (
    <section className={styles.hero}>
      <div className={`${styles.hero_grid} grid`}>
        <div className={styles.hero_decoration}>
          <p className={styles.hero_decoration__text}>
            start<em>()</em>;
          </p>
          <Link href="#works">
            <a className={styles.hero_decoration__scroll_down}>Scroll down</a>
          </Link>
        </div>

        <div className={styles.hero_container}>
          <h1 className={styles.hero_heading}>
            Hello, I'm{" "}
            <span className={styles.hero_heading___colored}>
              Joimee Tan Cajandab
            </span>{" "}
            <p>
              I <code>develop</code> and <em>design</em>{" "}
              <TextScramble initialText={fancyTexts[0]} texts={fancyTexts} />
            </p>
          </h1>
          <p className={styles.hero__text}>Let's see my works...</p>
        </div>
      </div>
      <ReactSVG className={styles.hero__background} src="images/patterns.svg" />
    </section>
  );
};

export default Hero;
