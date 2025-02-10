"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Eyes from "../animation/eyes";
import MaskText from "../animation/text-mark";

export default function Ready() {
  const container = useRef(null);
  const phrase = ["Ready", "to start", "the project"];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);

  return (
    <section
      className="padding-y relative z-30 mb-28 w-full rounded-t-[20px] lg:mt-52"
      ref={container}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="pointer-events-none text-center font-FoundersGrotesk text-[100px] font-bold uppercase leading-[80px] tracking-[-2.5px] text-secondry md:text-[180px] md:leading-[140px] lg:text-[220px] lg:leading-[170px]">
            <MaskText>{phrase}</MaskText>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="group flex cursor-pointer items-center justify-between rounded-full bg-secondry"></div>
        </div>
      </div>
      <motion.div
        className="absolute top-[50%] flex w-full translate-y-[-50%] transform items-center justify-center gap-[30px]"
        style={{ y: mq }}
      >
        <Eyes className="h-[100px] w-[100px] sm:flex-col md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]" />
      </motion.div>
    </section>
  );
}
