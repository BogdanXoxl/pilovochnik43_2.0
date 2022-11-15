import { objectType } from "nexus";

export const Account = objectType({
  name: "Account",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.string("type");
    t.string("provider");
    t.string("providerAccountId");
    t.nullable.string("refresh_token");
    t.nullable.string("access_token");
    t.nullable.int("expires_at");
    t.nullable.string("token_type");
    t.nullable.string("scope");
    t.nullable.string("id_token");
    t.nullable.string("session_state");

    t.field("user", {
      type: "User",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.account
          .findUnique({
            where: { id: parent.id },
          })
          .user();
      },
    });
  },
});
