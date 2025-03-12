"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Trash2, Loader2, Eye } from "lucide-react";

import TitlePage from "@/components/titlePage/titlePage";
import AddMovie from "./addMovie";
import EditMovie from "./editMovie";
import SearchForm from "@/components/searchForm/searchForm";
import Captcha from "@/components/captcha/captcha";
import NoData from "@/components/nodata/noData";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormItem, FormField } from "@/components/ui/form";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { deleteMovie, editMovie, getMovies } from "@/app/service/api";
import { IMovies } from "@/app/service/types";
import { tableHeaders } from "./tableProps";
import { searchProps } from "./searchProps";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setMovie } from "@/app/redux/slices/movieSlice";

const MoviesPage = () => {
  const form = useForm({
    defaultValues: {
      isShowing: false,
    },
  });
  const router = useRouter();
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [openOtp, setOpenOtp] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const dispatch = useDispatch();

  const getMoviesData = useCallback(async () => {
    try {
      const response = await getMovies({});
      if (response.data) {
        setMovies(response.data);
        setGenres(response.genres || []);
      }
    } catch (error) {
      toast.error("Failed to fetch movies. Please try again.");
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getMoviesData();
  }, [getMoviesData]);

  const newSearchProps = useMemo(
    () => [
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
    ],
    [genres]
  );

  const handleOtpVerified = (isMatch: boolean) => {
    if (isMatch) {
      setOpenOtp(false);
      handleDeleteMovie(id);
    }
  };

  const handleDeleteMovie = async (movieId: string) => {
    try {
      setId(movieId);
      const response = await deleteMovie({ movieId });
      if (response.message) {
        await getMoviesData();
        setId("");
        toast.success(response.message);
      }
    } catch (error) {
      toast.error("Failed to delete movie.");
      console.error(error);
    }
  };

  const handleToggleShowing = async (movieId: string, val: boolean) => {
    try {
      const formData = new FormData();
      formData.append("movieId", movieId);
      formData.append("isShowing", val.toString());
      const response = await editMovie(formData);

      if (response.message) {
        toast.success(response.message);
        await getMoviesData();
      } else {
        // If the request fails, revert the UI
        setMovies((prevMovies) =>
          prevMovies.map((movie) =>
            movie._id === movieId ? { ...movie, isShowing: !val } : movie
          )
        );
        toast.error("Failed to update movie status.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating movie status.");
    }
  };

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
                  <Form {...form}>
                    <form>
                      <FormField
                        control={form.control}
                        name={`isShowing`}
                        defaultValue={movie.isShowing}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Switch
                                id={`isShowing-${movie._id}`}
                                checked={movie.isShowing}
                                onCheckedChange={(val) => {
                                  field.onChange(val);
                                  handleToggleShowing(movie._id, val);
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        router.push(`/admin/movies/${movie._id}`);
                        dispatch(setMovie(movie));
                      }}
                    >
                      <Eye size={16} />
                    </Button>
                    <EditMovie record={movie} refreshMovies={getMoviesData} />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setOpenOtp(true);
                        setId(movie._id);
                      }}
                      disabled={id === movie._id}
                    >
                      {id === movie._id ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <Trash2 />
                      )}
                    </Button>
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
