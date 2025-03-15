"use client";

import * as React from "react";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { getMovies } from "./service/api";
import { IMovies, INowShowing } from "./service/types";
export default function Home() {
  const { setTheme } = useTheme();
  const [nowShowing, setNowShowing] = useState<IMovies[]>([]);

  const fetchNowShowing = async () => {
    const response = await getMovies({});

    if (response.data) {
      setNowShowing(response.data);
    }
  };

  useEffect(() => {
    setTheme("dark");
    fetchNowShowing();
  }, []);
  return (
    <div>
      <div className="w-full bg-accent px-6 py-4">
        <div className="text-2xl font-bold">Movie Prime</div>
      </div>
      <div className="mt-10">
        <div className="text-2xl font-bold">Now Showing</div>
      </div>
    </div>
  );
}
