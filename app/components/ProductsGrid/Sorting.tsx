"use client";

import React, { useState } from "react";

type SortType = "asc" | "desc" | "default";

export type FilterType = {
  field?: "orders" | "price";
  sort: SortType;
};

type Props = {
  withDiscount: boolean;
  discountClick: () => void;
};

// ["умолчанию", "возрастанию", "убыванию"];

const sortLabels: { [key in SortType]: string } = {
  default: "умолчанию",
  asc: "убыванию",
  desc: "возрастанию",
};

export const Sorting = ({ discountClick: _discountClick, withDiscount: _withDiscount }: Props) => {
  const [sortType] = useState<FilterType>({
    sort: "default",
  });

  const sortChange = () => {
    // setSortType((prev) => ({
    //   sort: ,
    // }));
  };

  return (
    <div className="w-full py-4 flex flex-col sm:flex-row justify-between items-center ">
      <div>
        Сортировать по:
        <button className="text-warning hover:underline ml-1" onClick={sortChange}>
          {sortLabels[sortType.sort]}
        </button>
      </div>
      <div className="">buttons</div>
    </div>
  );
};
