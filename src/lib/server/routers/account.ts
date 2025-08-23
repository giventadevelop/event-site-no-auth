import { publicProcedure, createTRPCRouter } from "@/lib/server/trpc";

export const accountRouter = createTRPCRouter({
  getUser: publicProcedure.query(async () => {
    // Return a mock user since no authentication is required
    return {
      user: {
        id: "guest-user",
        name: "Guest User",
        email: "guest@example.com",
      },
    };
  }),
});
