import { createTRPCRouter } from "~/server/api/trpc";
import { pokemonRouter } from "./routers/pokemon";
import { typeRouter } from "./routers/types";


export const appRouter = createTRPCRouter({
  pokemon: pokemonRouter,
  types: typeRouter,
});

export type AppRouter = typeof appRouter;
