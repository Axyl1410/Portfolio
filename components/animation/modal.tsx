"use client";

import gsap from "gsap";
import Image from "next/image";
import { TmodalProps } from "@/types";
import { motion } from "motion/react";
import { scaleAnimation } from "@/motion";
import { useRef, useEffect } from "react";

export default function Modal({ modal, projects }: TmodalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute hidden h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white sm:flex"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="ease-[0.76, 0, 0.24, 1] absolute h-full w-full transition-all duration-500"
        >
          {projects.map((project, index) => {
            const { img, color } = project;
            return (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={img}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto w-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="pointer-events-none absolute z-10 hidden h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[#455ce9] text-[14px] font-light text-white md:flex"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <motion.div
        ref={cursorLabel}
        className="pointer-events-none absolute z-10 hidden h-[80px] w-[80px] items-center justify-center rounded-[50%] bg-[#455ce9] text-[14px] font-light text-white md:flex"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
