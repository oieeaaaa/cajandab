import { useCallback, useState, useEffect, useRef } from "react";

const TextScramble = ({ initialText, texts, timeOut = 1000 }) => {
  const [scrambleCount, setScrambleCount] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // vars

  const scrambleChars = "!@#$%^&*()))_+`~" + texts[currentTextIndex];
  const currentText = texts[currentTextIndex];

  // refs

  const textDisplayRef = useRef(null);

  // callbacks

  const scrambleCharTimeout = useCallback(
    () =>
      setTimeout(() => {
        const { current: textDisplay } = textDisplayRef;
        const textSegments = currentText.split("");
        let scrambledText = "";

        for (
          let textIndex = 0;
          textIndex < textSegments.length;
          textIndex += 1
        ) {
          const randomChar =
            scrambleChars[Math.floor(Math.random() * scrambleChars.length)];

          scrambledText += randomChar;
        }

        textDisplay.textContent = scrambledText;

        setScrambleCount((prevCount) => prevCount + 1);
      }, 100),
    [currentTextIndex]
  );

  const changeTextTimeout = useCallback(() =>
    setTimeout(() => {
      setCurrentTextIndex(
        (prevCurrentTextIndex) => (prevCurrentTextIndex + 1) % texts.length // some math stuff
      );

      setScrambleCount(0);
    }, timeOut)
  );

  // effects

  useEffect(() => {
    if (!textDisplayRef.current) return;

    const { current: textDisplay } = textDisplayRef;

    if (scrambleCount >= scrambleChars.length) {
      textDisplay.textContent = texts[currentTextIndex];

      changeTextTimeout();

      return () => {
        clearTimeout(scrambleCharTimeout);
      };
    }

    scrambleCharTimeout();

    return () => clearTimeout(changeTextTimeout);
  }, [textDisplayRef, scrambleCount]);

  return <span ref={textDisplayRef}>{initialText}</span>;
};

export default TextScramble;
