"use client";
import eyes from "@/public/eyes.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Eyes({ className }: { className: string }) {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 280);
    });
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-[30px]">
      <div
        className={`flex items-center justify-center rounded-full border-[2px] border-[#21212188] bg-white ${className}`}
      >
        <Image
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
          src={eyes}
          alt="img"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`flex items-center justify-center rounded-full border-[2px] border-[#21212188] bg-white ${className}`}
      >
        <Image
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
          src={eyes}
          alt="img"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
