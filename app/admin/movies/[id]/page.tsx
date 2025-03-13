"use client";

import TitlePage from "@/components/titlePage/titlePage";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import Image from "next/image";
import { IMovies } from "@/app/service/types";
import { Badge } from "@/components/ui/badge";
import SetShedule from "./setShedule";
import { clearMovie } from "@/app/redux/slices/movieSlice";
import { motion } from "framer-motion";
const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector((state: RootState) => state.movie.movie) as IMovies;

  return (
    <div>
      <TitlePage
        title="Movie Information"
        hasBack
        clickBack={() => {
          dispatch(clearMovie());
        }}
      />
      <div className="md:px-10 px-2 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={movie.coverUrl || ""}
            alt={movie.title}
            width={100}
            height={100}
            className="w-full h-64 object-cover  rounded-lg"
            unoptimized
          />
        </motion.div>
        <div className="flex lg:flex-row flex-col gap-5 mt-10">
          <div className="flex-1 ">
            <div className="flex gap-4 items-start">
              <Image
                src={movie.posterUrl || ""}
                alt={movie.title}
                width={100}
                height={100}
                className="w-32 h-48 object-contain  rounded-lg"
              />
              <div className="space-y-2">
                <div className="md:text-4xl text-2xl mb-4 font-bold">
                  {movie.title}
                </div>
                <div className="text-sm flex gap-2 flex-wrap">
                  {movie.genres.map((genre) => (
                    <Badge key={genre}>{genre}</Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Directed by: {movie.director}
                </div>
                <div className="text-sm text-gray-500">
                  Produced by: {movie.producer}
                </div>
                <div className="text-sm text-gray-500">
                  Distributed by: {movie.distributor}
                </div>
                <div className="text-sm text-gray-500">
                  <div className="font-bold">Casts</div>
                  <div className="flex gap-2 flex-wrap">
                    {movie.casts.map((cast) => (
                      <span
                        key={cast}
                        onClick={() => {
                          window.open(
                            `https://www.google.com/search?q=${cast}`,
                            "_blank"
                          );
                        }}
                        className="cursor-pointer hover:underline"
                      >
                        {cast}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <div className="font-bold">Description</div>
                  <div className="flex gap-2 flex-wrap">
                    {movie.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <SetShedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
