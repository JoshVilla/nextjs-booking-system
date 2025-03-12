"use client";

import TitlePage from "@/components/titlePage/titlePage";
import AddMovie from "./addMovie";
import { useEffect, useState } from "react";
import { getMovies } from "@/app/service/api";
import { IMovies } from "@/app/service/types";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { tableHeaders } from "./tableProps";
import SearchForm from "@/components/searchForm/searchForm";
import { searchProps } from "./searchProps";
const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const getMoviesData = async () => {
    try {
      const response = await getMovies({});
      console.log(response);
      if (response.data) {
        setMovies(response.data);
        setGenres(response.genres || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newSearchProps = [
    ...searchProps,
    {
      name: "genre",
      type: "select",
      options: genres.map((genre) => ({
        value: genre,
        label: genre,
      })),
    },
  ];

  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <div className="w-full">
      <TitlePage title="Movies" />
      <div className="mt-4">
        <AddMovie setMovies={setMovies} />
        <SearchForm
          searchProps={newSearchProps}
          api={getMovies}
          result={setMovies}
        />
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableHead key={header.key}>{header.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie: IMovies) => (
              <TableRow key={movie._id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.director}</TableCell>
                <TableCell>{movie.producer}</TableCell>
                <TableCell>{movie.distributor}</TableCell>
                <TableCell>{movie.time}</TableCell>
                <TableCell>{movie.genres.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MoviesPage;
