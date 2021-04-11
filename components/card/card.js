import Link from "next/link";
import { ReactSVG } from "react-svg";
import styles from "./card.module.scss";

const Card = ({ className, horizontal, reverse, data }) => {
  let classes = [styles.card];

  if (className) {
    classes = classes.concat(className);
  }

  if (horizontal) {
    classes = classes.concat(styles.card___horizontal);
  }

  if (reverse) {
    classes = classes.concat(styles.card___reverse);
  }

  return (
    <Link href={data.href}>
      <a className={classes.join(" ")} target="_blank">
        <div className={styles.card_container}>
          <div className={styles.card__cover}>
            <video src={data.cover} autoPlay muted loop />
          </div>
          <p className={styles.card__category}>{data.category}</p>
          <div className={styles.card_meta}>
            <h4 className={styles.card_meta__title}>
              {data.name}
              <ReactSVG
                className={styles.card_meta__title___icon}
                src="icons/external-link.svg"
              />
            </h4>
            <p className={styles.card_meta__subtext}>{data.subtext}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
