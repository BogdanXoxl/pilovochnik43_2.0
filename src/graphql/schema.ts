import { GraphQLError } from "graphql/error";
import { connectionPlugin, makeSchema } from "nexus";
import { allow, nexusShield } from "nexus-shield";
import { validatePlugin } from "nexus-validate";
import path from "path";

import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  plugins: [
    connectionPlugin(),
    validatePlugin(),
    nexusShield({
      defaultError: new GraphQLError("Вы не авторизованы!", {
        extensions: {
          code: "UNAUTHENTICATED",
        },
      }),
      defaultRule: allow,
    }),
  ],
});

// TODO:: send notification to telegram
