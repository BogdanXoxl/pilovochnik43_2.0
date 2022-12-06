import { Prisma } from "@prisma/client";
import { extendType, idArg, mutationField, nonNull } from "nexus";
import { ruleType } from "nexus-shield";
import { number } from "yup";

export const ReviewMutations = mutationField("createReview", {
  type: "MutationResponse",
  args: {
    text: nonNull("String"),
    rate: nonNull("Int"),
    productId: nonNull(idArg()),
  },
  validate: ({ string }) => ({
    text: string().max(300).required(),
    rate: number().min(1).max(5),
  }),
  shield: ruleType({
    resolve: (_, _args, ctx) => {
      console.log(ctx.session);
      // TODO:: check session
      return true;
    },
  }),
  async resolve(_parent, { productId, text, rate }, ctx) {
    try {
      // TODO:: getUserID
      await ctx.prisma.review.create({
        data: {
          text,
          rate,
          productId,
          userId: "clafqag3i0000ujcdc0rwxblc",
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new user cannot be created with this email"
          );
        }
      }

      return {
        success: false,
        message: "false",
      };
    }
    return {
      success: true,
      message: "true",
    };
  },
});

export const ReviewMutationResponse = extendType({
  type: "MutationResponse",
  definition(t) {
    t.field("response", { type: "Review" });
  },
});

// TODO:: write error msg
// TODO:: write test client request
