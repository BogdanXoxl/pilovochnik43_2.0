import { objectType } from "nexus";

export const Review = objectType({
  name: "Review",
  definition(t) {
    t.string("id");
    t.string("text");
    t.int("rate");

    t.field("user", {
      type: "User",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.review
          .findUnique({
            where: { id: parent.id },
          })
          .user();
      },
    });

    t.date("createdAt");
    t.date("updatedAt");
  },
});
