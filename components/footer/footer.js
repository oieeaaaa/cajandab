import Link from "next/link";
import { ReactSVG } from "react-svg";
import styles from "./footer.module.scss";

const Footer = ({ socials }) => (
  <footer className={styles.footer}>
    <div className={`${styles.footer_container} grid`}>
      <div className={styles.footer_decoration}>
        <p className={styles.footer_decoration__text}>
          end<em>()</em>;{" "}
          <span className={styles.footer_decoration__comment}>
            // yay you made it here. Thanks! ❤️
          </span>
        </p>
      </div>
      <ul className={styles.footer_socials}>
        {socials.map(({ url, icon }) => (
          <Link href={url} key={icon}>
            <a className={styles.footer_socials__item} target="_blank">
              <ReactSVG src={icon} />
            </a>
          </Link>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
