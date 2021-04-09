import { useCallback, useState, useRef, useEffect } from "react";
import Link from "next/link";
import debounce from "lodash.debounce";
import breakpoint, { breakpoints } from "js/utils/breakpoint";
import styles from "./header.module.scss";

const Header = ({ nav }) => {
  // states

  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // callbacks

  const scrollTimeout = useCallback(() => {
    return setTimeout(() => {
      if (
        breakpoints[breakpoint()] < breakpoints.tabletLandscape &&
        isNavActive
      )
        return;

      setIsScrolled(true);
      setIsNavActive(false);
    }, 3000);
  }, [isNavActive]);

  // refs

  const navRef = useRef(null);
  const navItemUnderlineRef = useRef(null);

  // functions

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const moveNavItemUnderline = (e) => {
    if (
      breakpoints[breakpoint()] <= breakpoints.tablet ||
      !navItemUnderlineRef.current
    )
      return;

    const { current: navItemUnderline } = navItemUnderlineRef;
    const { offsetLeft, offsetWidth } = e.target;

    navItemUnderline.style.width = `${offsetWidth}px`;
    navItemUnderline.style.left = `${offsetLeft}px`;
    navItemUnderline.classList.add(
      styles.header_list__obedient_underline___active
    );
  };

  const hideNavItemUnderline = () => {
    if (!navItemUnderlineRef.current) return;

    const { current: navItemUnderline } = navItemUnderlineRef;

    navItemUnderline.classList.remove(
      styles.header_list__obedient_underline___active
    );

    setTimeout(() => {
      navItemUnderline.style.width = null;
      navItemUnderline.style.left = null;
    }, 100);
  };

  const classes = () => {
    let newClasses = [styles.header];

    if (isNavActive) {
      newClasses = newClasses.concat(styles.header___active);
    }

    if (isScrolled) {
      newClasses = newClasses.concat(styles.header___scrolled);
    }

    return newClasses.join(" ");
  };

  // effects

  // for nav touch events
  useEffect(() => {
    const { current: nav } = navRef;
    if (!nav) return;

    let prevClientY = 0;
    let prevRotateZ = 0;

    const touchStart = (e) => {
      const { touches } = e;
      const touch = touches.item(0);

      prevClientY = touch.clientY;
    };

    const touchEnd = (e) => {
      const { changedTouches } = e;
      const touch = changedTouches.item(0);

      prevRotateZ += prevClientY - touch.clientY;
    };

    // not a chess rule. Joke.
    const touchMove = (e) => {
      const { current: nav } = navRef;
      const { touches } = e;
      const { clientY } = touches.item(0);

      if (touches.length > 1) return; // should only use one finger for touching. yep.

      const rotateZ = prevRotateZ + (prevClientY - clientY);

      nav.style.transform = `scale(1) rotate(${rotateZ}deg)`;
    };

    nav.addEventListener("touchstart", touchStart);
    nav.addEventListener("touchend", touchEnd);
    nav.addEventListener("touchmove", touchMove);
  }, [navRef]);

  // for nav animation
  useEffect(() => {
    const { current: nav } = navRef;

    if (!nav) return;

    if (!isNavActive) {
      document.body.style.overflow = "";
      nav.style.transform = "scale(0)";
    } else {
      document.body.style.overflow = "hidden";
      nav.style.transform = "scale(1)";
    }
  }, [navRef, isNavActive]);

  // for scroll events
  useEffect(() => {
    let prevScrollY = window.scrollY;

    window.addEventListener(
      "scroll",
      debounce(() => {
        clearTimeout(scrollTimeout);

        if (
          prevScrollY < window.scrollY &&
          window.scrollY >= window.innerHeight
        ) {
          scrollTimeout();
        } else {
          setIsScrolled(false);
        }

        prevScrollY = window.scrollY;
      }, 100)
    );
  }, []);

  return (
    <header className={classes()} onMouseLeave={hideNavItemUnderline}>
      <div className={`${styles.header_container} grid`}>
        <p className={styles.header_brand}>
          <em className={styles.header_brand___em}>c</em>.joimee
          <em className={styles.header_brand___em}>(</em>e
          <em className={styles.header_brand___em}>)</em>;
        </p>
        <button onClick={toggleNav} className={styles.header_toggler} />
        <div className={styles.header_list_container}>
          <ul ref={navRef} className={styles.header_list}>
            {nav.map(({ label, href }) => (
              <li className={styles.header_list__item} key={href}>
                <Link href={href}>
                  <a
                    onMouseOver={moveNavItemUnderline}
                    className={styles.header_list__item_button}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div
            ref={navItemUnderlineRef}
            className={styles.header_list__obedient_underline}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
