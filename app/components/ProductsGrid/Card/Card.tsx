import React from "react";

import type { Product } from "../../../../generated/__generated__/gql-codegen/types";
import { PriceWithDiscount } from "./PriceWithDiscount";
import { Rating } from "./Rating";

type Props = {
  product: Product;
};

export const Card = ({ product }: Props) => {
  return (
    <div className="bg-[#F4F5F6] rounded">
      <div className="h-[115px] sm:h-[154px] md:h-[164px] lg:h-[194px] w-full bg-warning">img</div>
      <div className="flex flex-col px-2.5 py-1 sm:px-3 sm:py-2.5 md:px-3.5 lg:px-4 lg:py-3">
        <div className="flex items-center gap-1">
          <Rating rating={product?.rating ?? 4} />
          <span className="text-secondary text-[10px] sm:text-sm">({product?.reviews_count})</span>
        </div>
        <h3 className="text-secondary text-sm sm:text-base mt-0.5 font-bold truncate">
          {product.title}
        </h3>
        <span className="text-secondary/50 text-[10px] sm:text-sm">от 2-х дней</span>
        <PriceWithDiscount price={product.price ?? 0} discount={product.discount} />
      </div>
    </div>
  );
};
