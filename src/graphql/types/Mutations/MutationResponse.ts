import { objectType } from "nexus";

export const MutationResponse = objectType({
  name: "MutationResponse",
  definition(t) {
    t.boolean("success");
    t.string("message");
  },
});
