import { objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.string("id");
    t.string("title");
    t.nullable.string("seo_title");
    t.nullable.string("seo_description");
  },
});
