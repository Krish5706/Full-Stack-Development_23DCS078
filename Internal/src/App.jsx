import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";

// Note: MongoDB integration should be handled in the backend (Node.js/Express API)
// The frontend fetches data from TMDB and your backend (if needed)

function App() {
  return (
    <div className="bg-black min-h-screen w-full pb-8">
      <Navbar />
      <div className="pt-20">
        <Banner />
        <Row title="Popular Movies" type="action" />
        <Row title="Popular TV Shows" type="series" />
      </div>
    </div>
  );
}

export default App;