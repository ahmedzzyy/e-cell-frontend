"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTypewriter() {
  return (
    <Typewriter
      words={[
        "WELCOME TO E-CELL MIT!",
        "EMPOWERING INNOVATION",
        "BUILDING THE FUTURE",
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={250}
      deleteSpeed={80}
      delaySpeed={1000}
    />
  );
}
