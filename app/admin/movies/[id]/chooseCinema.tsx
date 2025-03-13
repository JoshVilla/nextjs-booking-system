import TitlePage from "@/components/titlePage/titlePage";
import { ICinema } from "@/app/service/types";
import { useState, useEffect } from "react";
import { getCinemas } from "@/app/service/api";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const ChooseCinema = ({
  setCinema,
}: {
  setCinema: (cinema: string) => void;
}) => {
  const [cinemas, setCinemas] = useState<ICinema[]>([]);
  const [selectedCinema, setSelectedCinema] = useState<string>("");
  const fetchCinemas = async () => {
    try {
      const response = await getCinemas({ isOpen: true });
      setCinemas(response.data);
      setSelectedCinema(response.data[0].name);
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
  useEffect(() => {
    fetchCinemas();
  }, []);

  useEffect(() => {
    setCinema(selectedCinema);
  }, [selectedCinema]);

  return (
    <div>
      <TitlePage title="Choose Cinema" />
      <div className="mt-4 flex gap-4 flex-wrap">
        {cinemas.map((cinema, index) => (
          <motion.div
            key={cinema._id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Button
              key={cinema._id}
              onClick={() => {
                setSelectedCinema(cinema.name);
              }}
              variant={selectedCinema === cinema.name ? "default" : "outline"}
            >
              {cinema.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCinema;
