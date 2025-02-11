import { MotionValue } from "motion/react";
import { StaticImageData } from "next/image";
import React from "react";

export type TParagraphProps = {
  paragraph: string;
};

export type TWordProps = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
};

export type TtextHoverProps = {
  title1: string;
  title2: string;
};

export type TmodalProps = {
  modal: {
    active: boolean;
    index: number;
  };
  projects: {
    img: StaticImageData;
    color: string;
  }[];
};

export type TMarqueeProps = {
  children: React.ReactNode;
  baseVelocity: number;
};

export type TProjectItem = {
  title: string;
  img: StaticImageData;
  href: string;
};
