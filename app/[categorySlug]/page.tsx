import { notFound } from "next/navigation";
import React from "react";

import prisma from "../../src/lib/prismadb";
import { ProductsGrid } from "../components/ProductsGrid";

const getPageData = async (slug?: string) => {
  if (!slug) return {};

  const category = await prisma.category.findUnique({
    where: {
      slug,
    },
  });

  const tags = await prisma.tag.findMany({
    where: {
      products: {
        some: {
          category: {
            slug,
          },
        },
      },
    },
  });

  return {
    id: category?.id,
    title: category?.title,
    tags,
    seoData: {
      title: category?.seo_title,
      description: category?.seo_title,
    },
  };
};

const Page = async ({ params }: { params: { categorySlug?: string } }) => {
  const { id, title, tags } = await getPageData(params?.categorySlug);

  if (!id) notFound();

  return (
    <div className="pt-14 container mx-auto px-4">
      <h1 className="capitalize text-2xl sm:text-4xl md:text-5xl">{title}</h1>
      <ProductsGrid categoryId={id} tags={tags} />
    </div>
  );
};

// TODO:: add layout

export default Page;

export const revalidate = 14400;

export async function generateStaticParams() {
  const categories = await prisma.category.findMany();

  return categories.map((c) => ({
    categorySlug: c.slug,
  }));
}
