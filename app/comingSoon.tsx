import React, { useEffect, useState } from "react";
import { IMovies } from "./service/types";
import { getHomeData, getMovies } from "./service/api";
import { motion } from "framer-motion";
import Image from "next/image";
interface IComingSoon {
  data: IMovies[];
}
const ComingSoon = ({ data }: IComingSoon) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 },
    }),
  };
  return (
    <div className="px-6 py-4">
      <div className="text-2xl font-bold">Coming Soon</div>
      <div className="mt-4 flex items-center gap-8 flex-wrap">
        {data.map((movie, index) => (
          <motion.div
            key={movie._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
            className="w-32 flex flex-col" // Added flex flex-col to control layout
          >
            <div className="w-32 h-48 overflow-hidden">
              {" "}
              {/* Fixed poster container */}
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                width={128}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="break-words h-40 overflow-hidden p-1 text-sm">
              {" "}
              {/* Fixed height for title */}
              {movie.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
