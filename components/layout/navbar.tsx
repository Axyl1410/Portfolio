"use client";

import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import MobileNav from "./mobile-nav";
import TextHover from "@/components/animation/text-hover";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={navVariants}
        className="padding-x fixed left-0 top-0 z-50 hidden w-full backdrop-blur-[7px] lg:block"
        animate={hidden ? "hidden" : "visible"}
      >
        <div
          className={
            "container flex h-[8vh] w-full items-center justify-between"
          }
        >
          <div className="w-[50%]">
            <Link href={"/"}>
              <h1 className={"font-FoundersGrotesk text-4xl font-bold"}>
                Axyl.
              </h1>
            </Link>
          </div>
          <div className="flex w-[50%] gap-x-[20px]">
            {navbarItems.map((item) => (
              <Link
                key={item.id}
                className={cn(
                  "paragraph hover flex w-fit flex-col font-NeueMontreal font-medium capitalize text-secondry",
                  item.id === 5 && "ml-auto",
                )}
                href={item.href}
              >
                <TextHover title1={item.title} title2={item.title} />
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
      <MobileNav />
    </>
  );
}
