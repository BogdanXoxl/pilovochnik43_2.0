import type { PrismaClient } from "@prisma/client";

import prisma from "../lib/prismadb";

export interface Context {
  prisma: PrismaClient;
}

export const createContext = async (): Promise<Context> => ({
  prisma,
});
