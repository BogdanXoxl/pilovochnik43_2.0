import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  return (
    <div className="w-full my-4 grid auto-rows-max justify-center sm:justify-between grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
};
