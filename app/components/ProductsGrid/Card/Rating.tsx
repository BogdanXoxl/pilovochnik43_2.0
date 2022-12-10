import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

type Props = {
  rating: number;
};

export const Rating = ({ rating }: Props) => (
  <div className="flex">
    {[...Array(5)].map((star, i) => (
      <>
        {i + 1 <= rating ? (
          <HiStar className="sm:text-[14px] text-[9px] text-warning" />
        ) : (
          <HiOutlineStar className="sm:text-[14px] text-[9px] text-[#B3B7BC]" />
        )}
      </>
    ))}
  </div>
);
