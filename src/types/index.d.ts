import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "~/server/api/root";
type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

type PokemonOuputType = RouterOutput["pokemon"]["getPokemon"];
type PokemonIuputType = RouterInput["pokemon"]["getPokemon"];

export { PokemonIuputType, PokemonOuputType };
