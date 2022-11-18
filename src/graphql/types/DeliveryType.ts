import { objectType } from "nexus";

export const DeliveryType = objectType({
  name: "DeliveryType",
  definition(t) {
    t.string("id");
    t.string("title");
    t.nullable.string("howLong");
    t.nullable.float("price");
  },
});
