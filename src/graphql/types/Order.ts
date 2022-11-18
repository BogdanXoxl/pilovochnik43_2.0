import { objectType } from "nexus";

export const Order = objectType({
  name: "Order",
  definition(t) {
    t.string("id");
    t.string("deliveryTypeId");
    t.float("summary");

    t.field("user", {
      type: "User",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.order
          .findUnique({
            where: { id: parent.id },
          })
          .user();
      },
    });

    t.field("status", {
      type: "Status",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.order
          .findUnique({
            where: { id: parent.id },
          })
          .status();
      },
    });

    t.field("delivery", {
      type: "DeliveryType",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.order
          .findUnique({
            where: { id: parent.id },
          })
          .delivery();
      },
    });

    t.list.field("products", {
      type: "ProductOrder",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.order
          .findUnique({
            where: { id: parent.id },
          })
          .products();
      },
    });

    t.date("createdAt");
    t.date("updatedAt");
  },
});
