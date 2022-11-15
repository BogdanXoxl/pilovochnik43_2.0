import { enumType, objectType } from "nexus";

export const ImageType = enumType({
  name: "ImageType",
  members: ["VIDEO", "PHOTO"],
});

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.string("id");
    t.string("link");
    t.field("type", { type: ImageType });
    t.string("productId");
    t.date("createdAt");
    t.date("updatedAt");

    t.field("product", {
      type: "Product",
      async resolve(parent, _args, ctx) {
        return ctx.prisma.product.findUnique({
          where: { id: parent.productId },
        });
      },
    });
  },
});
