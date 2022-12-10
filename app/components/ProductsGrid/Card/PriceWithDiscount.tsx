import clsx from "clsx";
import React from "react";

type Props = {
  price: number;
  discount?: number | null;
};

export const PriceWithDiscount = ({ price, discount = 0 }: Props) => (
  <div className="flex w-full items-end">
    <span
      className={clsx(
        "whitespace-nowrap text-base sm:text-2xl font-bold",
        discount && "text-danger"
      )}
    >
      ₽ {price - (price / 100) * (discount ?? 0)}
    </span>
    {(discount || undefined) && (
      <div className="flex w-full justify-between">
        <span className="line-through text-secondary whitespace-nowrap text-xs sm:text-lg ml-3.5">
          ₽{price}
        </span>
        <span className="bg-danger text-white font-bold text-xs sm:text-base rounded px-1 sm:px-2 sm:py-0.5">
          -{discount}%
        </span>
      </div>
    )}
  </div>
);
