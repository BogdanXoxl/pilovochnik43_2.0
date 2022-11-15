import { objectType } from "nexus";

export const DeliveryType = objectType({
  name: "DeliveryType",
  definition(t) {
    t.string("id");
    t.string("title");
    t.nullable.string("howLong");
    t.nullable.float("price");

    t.list.field("products", {
      type: "Product",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.deliveryType
          .findUnique({
            where: { id: parent.id },
          })
          .products();
      },
    });

    t.list.field("orders", {
      type: "Order",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.deliveryType
          .findUnique({
            where: { id: parent.id },
          })
          .orders();
      },
    });
  },
});
