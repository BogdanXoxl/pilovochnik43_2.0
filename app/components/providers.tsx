"use client";

import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import React from "react";

import client from "../../src/lib/apollo-client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </SessionProvider>
  );
};
