import { objectType } from "nexus";

export const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.string("id");
    t.string("title");
    t.date("createdAt");
    t.date("updatedAt");
  },
});
