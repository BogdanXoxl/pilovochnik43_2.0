import { objectType } from "nexus";

export const Status = objectType({
  name: "Status",
  definition(t) {
    t.string("id");
    t.string("title");
    t.nullable.string("message");
    t.date("createdAt");
    t.date("updatedAt");

    t.list.field("orders", {
      type: "Order",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.status
          .findUnique({
            where: { id: parent.id },
          })
          .orders();
      },
    });
  },
});
