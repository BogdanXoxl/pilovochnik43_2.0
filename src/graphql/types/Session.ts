import { objectType } from "nexus";

export const Session = objectType({
  name: "Session",
  definition(t) {
    t.string("id");
    t.string("sessionToken");
    t.string("userId");
    t.date("expires");

    t.field("user", {
      type: "User",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.session
          .findUnique({
            where: { id: parent.id },
          })
          .user();
      },
    });
  },
});
