"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="padding-x flex h-[8vh] w-full items-center justify-between md:hidden">
        <Link href={"/public"}>
          <h1 className={"font-FoundersGrotesk text-4xl font-bold"}>Axyl.</h1>
        </Link>
        <HiOutlineMenuAlt4
          onClick={() => setToggle(true)}
          className="cursor-pointer text-3xl text-black"
        />
      </div>
      <AnimatePresence mode="wait">
        {toggle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="bg-secondry fixed bottom-0 right-0 top-0 z-50 flex min-h-screen w-full flex-col items-end justify-end"
          >
            <div className="padding-x flex h-[8vh] w-full items-center justify-between border-b border-[#f1f1f155]">
              <Link href={"/public"}>
                <h1
                  className={
                    "font-FoundersGrotesk text-4xl font-bold text-background"
                  }
                >
                  Axyl.
                </h1>
              </Link>
              <IoMdClose
                onClick={() => setToggle(false)}
                className="cursor-pointer text-3xl text-background"
              />
            </div>
            <ul className="padding-x flex h-full w-full flex-col justify-center gap-[10px] text-left">
              {footernavbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={(toggle) => setToggle(!toggle)}
                  className="font-FoundersGrotesk text-[80px] font-bold uppercase leading-[67px] tracking-[-.9] text-background"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
