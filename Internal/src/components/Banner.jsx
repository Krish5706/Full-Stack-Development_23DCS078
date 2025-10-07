
import React, { useEffect, useState } from "react";
import { fetchBanner } from "../tmdb";

export default function Banner() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchBanner().then(res => setMovie(res.data.results[0]));
  }, []);
  return movie ? (
    <header
      className="relative h-[400px] flex flex-col justify-center px-8 text-black bg-cover bg-center"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-0" />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{movie.title}</h1>
        <p className="max-w-xl text-lg drop-shadow-md line-clamp-3">{movie.overview}</p>
      </div>
    </header>
  ) : null;
}