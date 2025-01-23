"use client";

import React, { useRef } from "react";
import { TParagraphProps, TWordProps } from "@/types";
import { motion, useScroll, useTransform } from "motion/react";

export default function Paragraph({ paragraph }: TParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.6", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <>
      <p
        ref={container}
        className="flex max-w-[1200px] flex-wrap text-[#202020] md:text-[30px] md:leading-[35px] md:tracking-wider lg:ml-[200px]"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
}

const Word = ({ children, progress, range }: TWordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative ml-1 mr-1 md:mr-3 md:mt-3">
      <span className="absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
