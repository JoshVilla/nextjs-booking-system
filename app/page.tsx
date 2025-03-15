"use client";

import * as React from "react";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { getHomeData, getMovies } from "./service/api";
import { IMovies, INowShowing } from "./service/types";
import NowShowing from "./nowShowing";
import ComingSoon from "./comingSoon";
export default function Home() {
  const { setTheme } = useTheme();
  const [nowShowing, setNowShowing] = useState<IMovies[]>([]);
  const [comingSoon, setComingSoon] = useState<IMovies[]>([]);

  const fetchNowShowing = async () => {
    try {
      const response = await getHomeData({});
      if (response.data) {
        setNowShowing(response.data.nowShowing);
        setComingSoon(response.data.comingSoon);
      }
    } catch (error) {
      console.error(error);
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
        <NowShowing data={nowShowing} />
        <ComingSoon data={comingSoon} />
      </div>
    </div>
  );
}
