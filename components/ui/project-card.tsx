"use client";

import { TProjectItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function ProjectCard({
  item,
  index,
  setModal,
}: {
  item: TProjectItem;
  index: number;
  setModal: Dispatch<
    SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}) {
  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <Link
        href={item.href}
        target="_blank"
        className="block overflow-hidden rounded-[10px]"
      >
        <Image
          src={item.img}
          alt={`${item.title} Image`}
          className="aspect-video h-full w-full rounded-[10px] object-cover"
        />
      </Link>
    </div>
  );
}
