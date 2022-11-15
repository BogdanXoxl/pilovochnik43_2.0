import { nonNull, objectType, stringArg } from "nexus";

export const Query = objectType({
  name: "Query",
  definition(t) {
    // me
    // t.field("me", {
    //   type: "User",
    //   args: {
    //     userId: nonNull(stringArg()),
    //   },
    //   resolve: (_parent, { userId }, ctx) => {
    //     return ctx.prisma.user.findUnique({
    //       where: { id: userId },
    //     });
    //   },
    // });

    // TODO:: add filtering and sorting
    t.list.field("products", {
      type: "Product",
      resolve: (_parent, _args, ctx) => {
        return ctx.prisma.product.findMany();
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
        });
      },
    });
  },
});
