"use client";

import { project } from "@/constants";
import { useRef, useState } from "react";
import ProjectCard from "../ui/project-card";
import { useScroll, motion, useTransform } from "motion/react";
import Marquee from "../animation/marquee";
import Modal from "@/components/animation/modal";

export default function Project() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const transformStyles = [
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section
      className="container my-[100px] w-full lg:mt-[150px]"
      id="projects"
    >
      <Marquee baseVelocity={2}>
        <h1 className="ld:mb-[50px] flex items-center justify-center text-[40px] font-bold uppercase tracking-tight text-[#202020] md:text-[80px] lg:text-[100px]">
          <span className="mx-[20px] h-[20px] w-[20px] rounded-full bg-[#8c8c8c] md:h-[40px] md:w-[40px]" />
          selected
          <span className="mx-[20px] h-[20px] w-[20px] rounded-full bg-[#8c8c8c] md:h-[40px] md:w-[40px]" />
          projects
        </h1>
      </Marquee>
      <div
        className="padding-x my-4 flex w-full flex-wrap justify-between gap-y-[50px]"
        ref={container}
      >
        {project.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-full sm:w-[49%]"
            style={{ y: transformStyles[index % transformStyles.length] }}
          >
            <ProjectCard item={project} index={index} setModal={setModal} />
          </motion.div>
        ))}
        <Modal projects={project} modal={modal} />
      </div>
    </section>
  );
}
