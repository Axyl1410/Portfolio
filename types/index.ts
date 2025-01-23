import { MotionValue } from "motion/react";

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
