import { Prisma } from "@prisma/client";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure.input(z.string().min(1)).query(async ({ input, ctx }) => {
    const capitalizeFirstLetter = input.charAt(0).toUpperCase() + input.slice(1);
    const lowerCaseInput = input.toLowerCase();

    let pokemon = await ctx.db.pokemon.findFirst({
      where: { name: { contains: capitalizeFirstLetter } },
      include: { types: { select: { name: true } } },
    });

    if (!pokemon) {
      pokemon = await ctx.db.pokemon.findFirst({
        where: { name: { contains: lowerCaseInput } },
        include: { types: { select: { name: true } } },
      });

      if (!pokemon) throw new Error("Pokémon not found");
    }

    return {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,
      sprite: pokemon.sprite,
      description: pokemon.description,
    };
}),


  getPokemonArray: publicProcedure
    .input(
      z.object({
        array: z.array(z.string()),
        filter: z.array(z.string()).optional(),
        page: z.number().optional(),
        limit: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
      const page = input.page || 1;
      const whereCondition: Prisma.PokemonWhereInput = {
        name: {
          in: input.array,
        },
        ...(input.filter && input.filter.length > 0
          ? {
              types: {
                some: {
                  name: {
                    in: input.filter,
                  },
                },
              },
            }
          : {}),
      };

      const result = await ctx.db.$transaction([
        ctx.db.pokemon.count({ where: whereCondition }),
        ctx.db.pokemon.findMany({
          where: whereCondition,
          include: { types: { select: { name: true } } },
          take: input.limit,
          skip: (page - 1) * input.limit,
          orderBy: { name: "asc" },
        }),
      ]);
      return result;
    }),
});
