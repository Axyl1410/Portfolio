import Word from "@/components/animation/word";
import { paragraph } from "@/constants";
import { motion } from "motion/react";

export default function About() {
  return (
    <section className="padding-x my-[50px] w-full lg:my-[100px]" id="about">
      <div className={"container"}>
        <h1 className="overflow-hidden text-[40px] font-bold uppercase leading-none tracking-tight text-[#202020] md:text-[60px] xl:text-[80px]">
          {"about".split("").map((item: string, i: number) => (
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block"
              key={i}
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="w-full">
          <Word paragraph={paragraph} />
        </div>
      </div>
    </section>
  );
}
