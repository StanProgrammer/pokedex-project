import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";

import Form from "~/components/Form";
import FilterablePokedexTable from "~/components/filter/FilterablePokedexTable";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Form />
      <FilterablePokedexTable />
    </Container>
  );
}
