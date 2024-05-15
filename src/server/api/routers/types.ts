import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const typeRouter = createTRPCRouter({
  getPokemonTypes: publicProcedure.query(async ({ ctx }) => {
    const pokemonTypes = await ctx.db.type.findMany();
    return pokemonTypes;
  }),
});
