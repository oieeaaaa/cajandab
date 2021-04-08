import { useState, useRef, useEffect } from "react";
import breakpoint, { breakpoints } from "js/utils/breakpoint";
import routes from "data/routes.json";
import styles from "./header.module.scss";

const Header = () => {
  // states

  const [isNavActive, setIsNavActive] = useState(false);

  // refs

  const navRef = useRef(null);
  const navItemUnderlineRef = useRef(null);

  // functions

  const toggleNav = () => setIsNavActive(!isNavActive);

  const onScrollToView = (selector) => {
    const view = document.querySelector(selector);

    if (!view) return false;

    view.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      nav.style.transform = "scale(0)";
    } else {
      nav.style.transform = "scale(1)";
    }
  }, [navRef, isNavActive]);

  return (
    <header
      className={`${styles.header} ${
        isNavActive ? styles.header___active : ""
      } grid`}
      onMouseLeave={hideNavItemUnderline}
    >
      <p className={styles.header_brand}>
        <em className={styles.header_brand___em}>c</em>.joimee
        <em className={styles.header_brand___em}>(</em>e
        <em className={styles.header_brand___em}>)</em>;
      </p>
      <button onClick={toggleNav} className={styles.header_toggler} />
      <div className={styles.header_list_container}>
        <ul ref={navRef} className={styles.header_list}>
          {routes.nav.map(({ label, selector }) => (
            <li className={styles.header_list__item} key={selector}>
              <button
                className={styles.header_list__item_button}
                onClick={() => onScrollToView(selector)}
                onMouseOver={moveNavItemUnderline}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div
          ref={navItemUnderlineRef}
          className={styles.header_list__obedient_underline}
        />
      </div>
    </header>
  );
};

export default Header;
