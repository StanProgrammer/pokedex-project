# Pokedex Project

## Introduction
This is a Pokedex web application. This project is built with TypeScript, Next.js, Prisma, tRPC, and Material UI. The application allows users to search for Pokémon, view detailed information, and interact with a responsive UI.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Local Setup Run](#local-setup-run)
- [Deployed URL](#deployed-url)

## Features
- Search for Pokémon by name
- View detailed information about each Pokémon, including types, description, and sprite
- Responsive UI with Material UI components
- Efficient data fetching with tRPC and Prisma

## Technologies Used
- **TypeScript**: For static typing and improved developer experience.
- **Next.js**: For server-side rendering and building the React application.
- **Prisma**: As the ORM for database management.
- **tRPC**: For building type-safe APIs.
- **Material UI**: For styling and UI components.
- **superjson**: For data serialization and deserialization.
- **Vercel-postgres**: For PostgreSQL cloud hosting

## Setup and Installation
Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL

## Local Setup Run

1. Clone the repository:
   ```bash
   git clone https://github.com/StanProgrammer/pokedex-project
   cd pokedex-project

2. Install the dependencies:
    ```bash
    npm i

3. Set up the environment variables:
   Create a .env file in the root directory and add your database URL and other necessary environment variables:
   ```bash
    POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/mydb"
    VERCEL_URL="your-vercel-url" # for production deployment

4. Set up the database with Prisma:
    ```bash
    npx prisma init
    npx prisma generate
    npx prisma migrate dev --name init
    npm run seed
    
5. Run the development server:
    ```bash
    npm run dev

6. Open the application in your browser:
    ```bash
    http://localhost:3000


### Deployed URL
https://pokedex-atibkhan392-gmailcom-atib-khans-projects.vercel.app/
    
    


