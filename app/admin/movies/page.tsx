"use client";

import TitlePage from "@/components/titlePage/titlePage";
import AddMovie from "./addMovie";
import { useEffect, useState } from "react";
import { deleteMovie, getMovies } from "@/app/service/api";
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
import Captcha from "@/components/captcha/captcha";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import NoData from "@/components/nodata/noData";
import EditMovie from "./editMovie";
const MoviesPage = () => {
  const { toast } = useToast();
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [openOtp, setOpenOtp] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const getMoviesData = async () => {
    try {
      const response = await getMovies({});
      if (response.data) {
        setMovies(response.data);
        setGenres(response.genres || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOtpVerified = (isMatch: boolean) => {
    if (isMatch) {
      setOpenOtp(false);
      handleDeleteMovie(id);
    }
  };

  const newSearchProps = [
    ...searchProps,
    {
      name: "genre",
      type: "select",
      placeholder: "Select a genre",
      options: genres.map((genre) => ({
        value: genre,
        label: genre,
      })),
    },
  ];

  const handleDeleteMovie = async (movieId: string) => {
    try {
      const response = await deleteMovie({ movieId });
      if (response.message) {
        await getMoviesData();
        setId("");
        toast({
          title: "Success",
          description: response.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <EditMovie record={movie} refreshMovies={getMoviesData} />
                    {id === movie._id ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setOpenOtp(true);
                          setId(movie._id);
                        }}
                      >
                        <Trash2 />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {movies.length === 0 && <NoData />}
      </div>
      <Captcha
        open={openOtp}
        setOpen={setOpenOtp}
        onVerified={handleOtpVerified}
      />
    </div>
  );
};

export default MoviesPage;
