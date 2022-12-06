import type { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import { HeaderLink } from "./HeaderLink";

type Props = {
  categories: Category[];
};

export const Header = ({ categories }: Props) => {
  return (
    <header className="container mx-auto px-4">
      <div className="flex h-20 w-full items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary sm:text-4xl">
          Пиловочник 43
        </Link>
        <div className="flex gap-x-7 sm:gap-x-10">
          <Link href="/profile">
            <AiOutlineUser className="text-primary w-5 h-5 hover:text-warning" />
          </Link>
          <Link href="/favorite">
            <AiOutlineHeart className="text-primary w-5 h-5 hover:text-warning" />
          </Link>
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-primary w-5 h-5 hover:text-warning" />
          </Link>
        </div>
      </div>
      <ul className="scrollbar-hide flex h-14 w-full gap-x-7 overflow-x-auto">
        {categories.map((c) => (
          <HeaderLink key={c.id} slug={c.slug} title={c.title} />
        ))}
      </ul>
    </header>
  );
};
