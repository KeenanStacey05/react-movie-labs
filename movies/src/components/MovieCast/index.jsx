import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'

export default function MovieCast({ movie }) {
    const { data: cast, error, isPending, isError } = useQuery({
    queryKey: ['credits', { id: movie.id }],
    queryFn: getMovieCredits,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="cast table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="right">Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.slice(0, 10).map((member) => (
            <TableRow key={member.id}>
              <TableCell component="th" scope="row">
                {member.name}
              </TableCell>
              <TableCell align="right" >{member.character}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


