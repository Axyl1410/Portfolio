"use client";

import gsap from "gsap";
import Image from "next/image";
import frame from "@/public/frame.png";
import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    gsap.to(".bar", {
      delay: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
        from: "start",
      },
    });

    gsap.to(".finder-container img", {
      scale: 1,
      delay: 2,
    });

    gsap.to(".finder-container img", {
      scale: 0,
      delay: 5,
      duration: 0.5,
      stagger: 0.075,
    });

    gsap.to(".bar", {
      delay: 5,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
        from: "end",
      },
    });

    gsap.to(".marquee", {
      delay: 0,
      left: "0vw",
      duration: 4,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.to(".marquee", {
          opacity: 0,
          repeat: 4,
          yoyo: true,
          duration: 0.1,
          onComplete: () => {
            gsap.to(".marquee", {
              opacity: 1,
            });
          },
        });
      },
    });

    gsap.to(".marquee", {
      delay: 4,
      left: "-100vw",
      duration: 4,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col">
      <div className="finder-container absolute left-1/2 top-1/2 z-20 h-[500px] w-[80%] -translate-x-1/2 -translate-y-1/2">
        {[frame, frame, frame, frame, frame].map((frame, index) => (
          <Image
            key={index}
            src={frame}
            alt="frame"
            className="absolute h-full w-full scale-0 object-cover"
          />
        ))}
      </div>
      <div className="bar mt-[-1px] w-full flex-1 bg-[#d6d5d5] py-[24px]">
        <div className="marquee relative left-[100vw] flex w-[300vw] gap-[40px] text-[18px] uppercase">
          {Array(20)
            .fill("axyl")
            .map((text, index) => (
              <p
                key={index}
                className="flex items-center gap-[10px] whitespace-nowrap text-[18px] font-medium text-black"
              >
                <span className="relative pr-[4px] text-[36px]">■</span>
                {text}
              </p>
            ))}
        </div>
      </div>
      <div className="bar mt-[-1px] w-full flex-1 bg-[#d6d5d5] py-[24px]" />
      <div className="bar mt-[-1px] w-full flex-1 bg-[#d6d5d5] py-[24px]" />
      <div className="bar mt-[-1px] w-full flex-1 bg-[#d6d5d5] py-[24px]" />
      <div className="bar mt-[-1px] flex w-full flex-1 flex-col justify-end bg-[#d6d5d5] py-[24px]">
        <div className="marquee relative left-[100vw] flex w-[300vw] gap-[40px] text-[18px] uppercase">
          {Array(20)
            .fill("axyl")
            .map((text, index) => (
              <p
                key={index}
                className="flex items-center gap-[10px] whitespace-nowrap text-[18px] font-medium text-black"
              >
                <span className="relative pr-[4px] text-[36px]">■</span>
                {text}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
