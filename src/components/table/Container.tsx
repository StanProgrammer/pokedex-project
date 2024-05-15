import React from "react";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
export default function TableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ maxWidth: 10 }}>Id</TableCell>
            <TableCell align="right">Pokemon Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Pokemon Types</TableCell>
            <TableCell align="right">Pokemon Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
