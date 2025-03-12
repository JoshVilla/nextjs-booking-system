"use client";
import TitlePage from "@/components/titlePage/titlePage";
import AddCinema from "./addCinema";
import { useEffect, useState } from "react";
import { ICinema } from "@/app/service/types";
import { getCinemas } from "@/app/service/api";
import { motion } from "framer-motion";
import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import EditCinema from "./editCinema";
const Cinemas = () => {
  const [cinemas, setCinemas] = useState<ICinema[]>([]);
  const [openEditCinema, setOpenEditCinema] = useState(false);
  const [cinemaToEdit, setCinemaToEdit] = useState<ICinema | null>(null);
  const fetchCinemas = async () => {
    try {
      const response = await getCinemas();
      setCinemas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 },
    }),
  };

  const handleAddData = (data: ICinema) => {
    console.log(data);
    setCinemas([...cinemas, data]);
  };
  useEffect(() => {
    fetchCinemas();
  }, []);

  return (
    <div>
      <TitlePage title="Cinemas" />
      <div className="mt-4">
        <AddCinema handleAddData={handleAddData} />

        <div className="mt-4 flex gap-4 flex-wrap">
          {cinemas.map((cinema, index) => (
            <motion.div
              key={cinema._id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index} // Pass index to control delay
              className="md:w-64 md:h-40 w-44 h-28 overflow-hidden rounded-md relative "
              onClick={() => {
                setCinemaToEdit(cinema);
                setOpenEditCinema(true);
              }}
            >
              <Image
                src={`/assets/cinemaBackground/cinema-bg-${cinema.backgroundCode}.png`}
                alt="Cinema"
                fill
                className="object-cover"
              />

              {cinema.isOpen ? (
                <div>
                  <div className="absolute top-4 right-4 bg-green-500 rounded-full h-2 w-2" />
                  <div className="absolute top-4 right-4 bg-green-500 rounded-full h-2 w-2 animate-ping" />
                </div>
              ) : (
                <div>
                  <div className="absolute top-4 right-4 bg-gray-200 rounded-full h-2 w-2" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 py-2 pl-4 w-full bg-black/50">
                <div className="text-white md:text-2xl text-sm font-bold">
                  {cinema.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {cinemaToEdit && (
        <EditCinema
          initOpen={openEditCinema}
          setOpen={setOpenEditCinema}
          record={cinemaToEdit}
          refreshCinemas={fetchCinemas}
        />
      )}
    </div>
  );
};

export default Cinemas;
