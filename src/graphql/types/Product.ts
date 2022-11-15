import { objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.string("id");
    t.string("slug");
    t.string("title");
    t.string("description");
    t.string("seo_title");
    t.string("seo_description");
    t.list.string("sizes");
    t.nullable.int("discount");
    t.float("price");

    t.list.field("images", {
      type: "Image",
      resolve: async (parent, _args, ctx) =>
        ctx.prisma.image.findMany({
          where: {
            productId: parent.id,
          },
        }),
    });

    t.float("rating", {
      resolve: async (parent, _args, ctx) => {
        const res = await ctx.prisma.review.aggregate({
          where: {
            productId: parent.id,
          },
          _avg: {
            rate: true,
          },
        });

        // eslint-disable-next-line no-underscore-dangle
        return res._avg.rate ?? 0;
      },
    });

    t.nullable.int("orders_count", {
      resolve: async (parent, _args, ctx) =>
        ctx.prisma.productOrder.count({
          where: {
            productId: parent.id,
          },
        }),
    });

    t.list.field("tags", {
      type: "Tag",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.product
          .findUnique({
            where: { id: parent.id },
          })
          .tags({
            include: {
              products: true,
            },
          });
      },
    });

    t.list.field("categories", {
      type: "Category",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.product
          .findUnique({
            where: { id: parent.id },
          })
          .categories();
      },
    });

    t.list.field("reviews", {
      type: "Review",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.product
          .findUnique({
            where: { id: parent.id },
          })
          .reviews();
      },
    });

    t.list.field("delivery", {
      type: "DeliveryType",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.product
          .findUnique({
            where: { id: parent.id },
          })
          .delivery();
      },
    });

    t.date("createdAt");
    t.date("updatedAt");
  },
});
