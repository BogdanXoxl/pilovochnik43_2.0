import type { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import prisma from "../lib/prismadb";

export interface Context {
  prisma: PrismaClient;
  session: Session | null;
}

export const createContext = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Context> => {
  const session = await unstable_getServerSession(req, res, authOptions);
  return {
    prisma,
    session,
  };
};
