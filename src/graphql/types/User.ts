import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.nullable.string("name");
    t.nullable.string("email");
    t.nullable.date("emailVerified");
    t.nullable.string("image");
    t.list.field("accounts", {
      type: "Account",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .accounts();
      },
    });

    t.list.field("sessions", {
      type: "Session",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .sessions();
      },
    });

    t.list.field("reviews", {
      type: "Review",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .reviews();
      },
    });

    t.list.field("orders", {
      type: "Order",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .orders();
      },
    });
  },
});
