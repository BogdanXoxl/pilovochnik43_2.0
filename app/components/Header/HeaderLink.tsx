"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

type Props = {
  slug: string;
  title: string;
};

export const HeaderLink = ({ slug, title }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li
      className={clsx(
        segment === slug && "border-b-2 text-primary",
        "h-full whitespace-nowrap border-solid border-b-primary px-4 pt-1" +
          " uppercase transition-all duration-75 ease-in-out hover:border-b-2 hover:text-primary"
      )}
    >
      <Link href={slug}>{title}</Link>
    </li>
  );
};
