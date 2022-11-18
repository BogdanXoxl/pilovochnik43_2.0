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

    t.field("category", { type: "Category" });
    t.list.field("tags", { type: "Tag" });
    t.list.field("images", { type: "Image" });
    t.list.field("reviews", { type: "Review" });
    t.list.field("delivery", { type: "DeliveryType" });

    t.date("createdAt");
    t.date("updatedAt");

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

    t.nullable.int("reviews_count", {
      resolve: async (parent, _args, ctx) =>
        ctx.prisma.review.count({
          where: {
            productId: parent.id,
          },
        }),
    });
  },
});
