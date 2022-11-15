import { objectType } from "nexus";

export const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.string("id");
    t.string("title");
    t.date("createdAt");
    t.date("updatedAt");

    t.list.field("products", {
      type: "Product",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.tag
          .findUnique({
            where: { id: parent.id },
          })
          .products();
      },
    });
  },
});
