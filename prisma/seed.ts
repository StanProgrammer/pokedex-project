const { PrismaClient } = require("@prisma/client");
import { pokemonData } from "./data";
const dotenv = require('dotenv');

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  const typeData = [
    "Grass", "Poison", "Fire", "Water", "Electric", "Normal", "Fairy",
    "Fighting", "Steel", "Ghost", "Rock", "Ground", "Bug", "Flying",
    "Ice", "Dragon", "Psychic"
  ].map(name => ({ name }));

  await prisma.$transaction(
    typeData.map(type => prisma.type.upsert({
      where: { name: type.name },
      update: {},
      create: type,
    }))
  );

  console.log("Types seeded successfully");

 
  
  for (const data of pokemonData) {
    console.log(`Processing Pokémon: ${data.name}`);

    const existingPokemon = await prisma.pokemon.findUnique({
      where: { name: data.name },
    });

    const typesArray = data.types;
    const types = await prisma.type.findMany({
      where: {
        name: {
          in: typesArray,
        },
      },
    });

    console.log(`Found types for ${data.name}: ${types.map((type:any) => type.name)}`);

    if (existingPokemon) {
      // Update the existing Pokémon with new types
      await prisma.pokemon.update({
        where: { id: existingPokemon.id },
        data: {
          types: {
            connect: types.map((type:any) => ({ id: type.id })),
          },
        },
      });
      console.log(`Updated Pokémon: ${data.name}`);
    } else {
      // Create the Pokémon with the associated types
      await prisma.pokemon.create({
        data: {
          name: data.name,
          sprite: data.sprite,
          description:data.description,
          types: {
            connect: types.map((type:any) => ({ id: type.id })),
          },
        },
      });
      console.log(`Created Pokémon: ${data.name}`);
    }
  }

  console.log("Data seeded successfully");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
