import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { type Context } from "../trpc/context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

// All procedures are now public since no authentication is required
export const protectedProcedure = t.procedure;
