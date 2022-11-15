import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import type { Context } from "../../src/graphql/context";
import { createContext } from "../../src/graphql/context";
import { schema } from "../../src/graphql/schema";

const server = new ApolloServer<Context>({
  schema,
});

export default startServerAndCreateNextHandler(server, {
  context: createContext,
});
