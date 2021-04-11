import { useRef, useState, useEffect } from "react";

const useIntersectionObserver = (options = {}) => {
  // refs

  const elementRef = useRef(null);

  // states

  const [entry, setEntry] = useState({});
  const [isIntersected, setIntersected] = useState(false);

  // effects

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (!isIntersected && isIntersecting) {
        setIntersected(true);
      }

      setEntry({
        isIntersecting,
      });
    }, options);

    observer.observe(elementRef.current);
  }, [elementRef]);

  return [elementRef, { ...entry, isIntersected }];
};

export default useIntersectionObserver;
