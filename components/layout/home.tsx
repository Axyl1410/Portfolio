"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import hero from "@/public/hero.jpg";

export default function Hero() {
  return (
    <section
      className="padding-x mb-[-10px] h-screen w-full sm:mb-0"
      data-scroll=""
      data-scroll-speed="-.3"
    >
      <div className="container flex h-full w-full flex-col justify-between">
        <div />
        <div className="flex h-[85vh] w-full flex-col justify-between sm:h-[75vh]">
          <div className="flex w-full justify-between gap-[20px]">
            <div>
              <h1 className="heading font-FoundersGrotesk font-semibold uppercase tracking-[-1.3px] text-[#212121]">
                we create <br />
                <div className="flex items-center gap-[5px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                    className="aspect-video leading-[130px]"
                  >
                    <Image
                      width={120}
                      height={50}
                      src={hero}
                      alt="img"
                      className="mt-[10px] h-[93px] rounded-[10px] object-cover md:h-[65px] lg:mt-[15px] lg:h-[85px] lg:w-[120px]"
                    />
                  </motion.span>
                  <h1 className="heading font-FoundersGrotesk font-semibold uppercase tracking-[-1.3px] text-[#212121]">
                    eye-opening
                  </h1>
                </div>
                presentation
              </h1>
            </div>
          </div>
          <div className="mb-[80px] flex h-[22vh] w-full flex-col gap-[30px] border-t border-[#21212155] py-[20px] sm:mb-0">
            <div className="flex flex-col items-start justify-between gap-[20px] sm:flex-row sm:items-center">
              <div className="w-full sm:w-[50%]">
                <p className="paragraph font-NeueMontreal text-secondry">
                  For public and private companies
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-between gap-[20px] sm:w-[50%] sm:flex-row">
                <div>
                  <p className="paragraph font-NeueMontreal text-secondry">
                    From the first picth to IPO
                  </p>
                </div>
                <div className="link group flex items-center gap-[5px]">
                  <div className="cursor-pointer rounded-[50px] border border-[#21212199] px-[12px] py-[3px] text-center group-hover:bg-secondry">
                    <Link
                      className="paragraph transform text-center font-NeueMontreal uppercase text-secondry transition-all duration-[0.3s] ease-[.215,.61,.355,1] group-hover:text-background"
                      href="/"
                    >
                      start the project
                    </Link>
                  </div>
                  <div className="hidden h-[33px] w-[33px] transform cursor-pointer items-center justify-center rounded-full border border-[#21212199] p-[30px] transition-all duration-[0.3s] ease-[.215,.61,.355,1] group-hover:bg-secondry sm:p-px lg:flex">
                    <p className="font-normal text-secondry group-hover:text-background">
                      <ArrowUpRight size={24} strokeWidth={1.25} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full items-center justify-center overflow-hidden sm:flex">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "100%", opacity: 0.5 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: [0.3, 0.86, 0.36, 0.95],
                }}
                className="paragraph font-NeueMontreal text-secondry opacity-50"
              >
                {/*scroll down*/}
                In Progress
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
