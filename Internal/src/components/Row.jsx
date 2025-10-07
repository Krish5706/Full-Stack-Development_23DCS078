import React, { useEffect, useState } from "react";
import { fetchMovies, fetchDetails } from "../tmdb";

export default function Row({ title, type }) {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchMovies(type).then(res => setItems(res.data.Search || []));
  }, [type]);

  const handleClick = async (imdbID) => {
    const res = await fetchDetails(imdbID);
    setDetails(res.data);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold text-white mb-4 px-8">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 px-8 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-white transition-all duration-300">
        {items.map(item => (
          <img
            key={item.imdbID}
            src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={item.Title}
            onClick={() => handleClick(item.imdbID)}
            className="h-48 w-32 object-cover rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-red-600"
          />
        ))}
      </div>
      {details && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative max-w-lg w-full text-black">
            <h3 className="text-2xl font-bold mb-2">{details.Title}</h3>
            <p className="mb-2">{details.Year} | {details.Type}</p>
            <p className="mb-4">{details.Plot}</p>
            <img src={details.Poster !== "N/A" ? details.Poster : "https://via.placeholder.com/300x450?text=No+Image"} alt={details.Title} className="w-32 h-48 object-cover rounded mb-4" />
            <button
              onClick={() => setDetails(null)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}