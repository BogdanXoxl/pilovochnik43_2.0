import { enumType, inputObjectType, list, nonNull, objectType, stringArg } from "nexus";

export const SortOrder = enumType({
  name: "SortOrder",
  members: ["asc", "desc"],
});

export const SortOrderField = enumType({
  name: "SortOrderField",
  members: ["price", "orders"],
});

export const ProductsFilterType = inputObjectType({
  name: "ProductsFilterType",
  definition(t) {
    t.nullable.field("sort", { type: "SortOrder" });
    t.nonNull.field("field", { type: "SortOrderField" });
  },
});

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("tags", {
      type: "Tag",
      args: {
        sort: "SortOrder",
      },
      resolve: async (_parent, { sort }, ctx) =>
        ctx.prisma.tag.findMany({
          ...(sort && {
            orderBy: {
              products: {
                _count: sort,
              },
            },
          }),
        }),
    });

    t.list.field("categories", {
      type: "Category",
      args: {
        sort: "SortOrder",
      },
      resolve: async (_parent, { sort }, ctx) =>
        ctx.prisma.category.findMany({
          ...(sort && {
            orderBy: {
              products: {
                _count: sort,
              },
            },
          }),
        }),
    });

    t.list.field("products", {
      type: "Product",
      args: {
        filters: ProductsFilterType,
        tags: list("String"),
        discount: "Boolean",
        category_id: "String",
      },
      resolve: async (_parent, args, ctx) => {
        let obj: any;

        if (args.filters?.field === "price" && args.filters?.sort)
          obj = {
            price: args.filters?.sort,
          };
        else if (args.filters?.field === "orders" && args.filters?.sort)
          obj = {
            history: {
              _count: args.filters?.sort,
            },
          };

        return ctx.prisma.product.findMany({
          orderBy: [obj, { updatedAt: "desc" }],
          where: {
            hide: false,
            discount: {
              gt: args.discount ? 0 : undefined,
            },
            category: {
              id: args.category_id,
            },
            tags: {
              some: {
                id: {
                  in: args.tags?.length ? args.tags : undefined,
                },
              },
            },
          },
          include: {
            category: true,
            tags: true,
            images: true,
            reviews: true,
            delivery: true,
          },
        });
      },
    });

    t.field("product", {
      type: "Product",
      args: {
        productId: nonNull(stringArg()),
      },
      resolve: (_parent, { productId }, ctx) => {
        return ctx.prisma.product.findUnique({
          where: { id: productId },
          include: {
            category: true,
            tags: true,
            images: true,
            reviews: true,
            delivery: true,
          },
        });
      },
    });
  },
});
