export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    session: null, // No authentication required
    ...opts,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
