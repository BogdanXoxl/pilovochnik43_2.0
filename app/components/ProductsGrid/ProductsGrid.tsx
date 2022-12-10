"use client";

import type { Tag } from "@prisma/client";
import React, { useState } from "react";

import { Tags } from "../Tags";
import { Card } from "./Card";
import { useGetProductsQuery } from "./gql/__generated__/GetProductsQuery";
import { Grid } from "./Grid/Grid";
import { Sorting } from "./Sorting";

type Props = {
  categoryId: string;
  tags: Tag[];
};

export const ProductsGrid = ({ categoryId, tags }: Props) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [withDiscount, setWithDiscount] = useState(false);
  const { data, loading } = useGetProductsQuery({
    variables: {
      discount: withDiscount,
      tags: selectedTags.map((el) => el.id),
      categoryId,
      // filters: ,
    },
  });

  return (
    <div className="">
      <Tags tags={tags} onChange={setSelectedTags} />
      <Sorting discountClick={() => setWithDiscount((prev) => !prev)} withDiscount={withDiscount} />
      {!loading && (
        <Grid>
          {data?.products?.map((product) => (
            <Card product={product} key={product?.id} />
          ))}
        </Grid>
      )}
    </div>
  );
};

// TODO:: add search params for each tag
