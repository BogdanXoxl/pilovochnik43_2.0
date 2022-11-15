import { objectType } from "nexus";

export const ProductOrder = objectType({
  name: "ProductOrder",
  definition(t) {
    t.string("id");
    t.float("price");
    t.int("amount");

    t.string("orderId");
    t.string("productId");

    t.field("product", {
      type: "Product",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.productOrder
          .findUnique({
            where: { id: parent.id },
          })
          .product();
      },
    });

    t.field("order", {
      type: "Order",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.productOrder
          .findUnique({
            where: { id: parent.id },
          })
          .order();
      },
    });
  },
});
