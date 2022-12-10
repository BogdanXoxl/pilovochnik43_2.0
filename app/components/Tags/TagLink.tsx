import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  selected: boolean;
  onClick?: (e: any) => void;
};

export const TagLink = ({ title, selected, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        "cursor-pointer h-9 py-1.5 px-5 transition duration-100 ease-in-out border rounded hover:border hover:border-primary hover:text-primary",
        selected
          ? "border-primary text-primary hover:bg-primary hover:text-white"
          : "border-transparent"
      )}
    >
      {title}
    </li>
  );
};
