"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Loader from "@/components/animation/preload";
import Navbar from "@/components/layout/navbar";
import Home from "@/components/layout/home";
import Footer from "@/components/layout/footer";
import Cursor from "@/components/animation/cursor";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 6500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={"hidden lg:block"}>
            <Cursor />
          </div>
          <Navbar />
          <Home />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
