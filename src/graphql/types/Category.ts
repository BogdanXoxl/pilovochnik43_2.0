import { objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.string("id");
    t.string("title");
    t.nullable.string("seo_title");
    t.nullable.string("seo_description");
    t.date("createdAt");
    t.date("updatedAt");
    t.nullable.string("productId");

    t.list.field("products", {
      type: "Product",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.category
          .findUnique({
            where: { id: parent.id },
          })
          .products();
      },
    });
  },
});
