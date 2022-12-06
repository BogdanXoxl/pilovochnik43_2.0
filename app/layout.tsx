import "../styles/globals.css";

import { Lato } from "@next/font/google";
import type { Category } from "@prisma/client";
import type { ReactNode } from "react";

import prisma from "../src/lib/prismadb";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Providers } from "./components/providers";

const font = Lato({
  weight: ["400", "700"],
  style: ["normal"],
});

const getCategories = async (): Promise<Category[]> => {
  return prisma.category.findMany({
    orderBy: {
      products: {
        _count: "desc",
      },
    },
  });
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const categories = await getCategories();

  return (
    <html>
      <head />
      <body className={font.className}>
        <Providers>
          <Header categories={categories} />
          <div className="min-h-[calc(100vh-136px-826px)] sm:min-h-[calc(100vh-136px-512px)] md:min-h-[calc(100vh-136px-269px)]">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
