import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import SearchPhoto from "./components/home_search/SearchPhoto";
import SearchVideo from "./components/home_search/SearchVideo";
import HomeVideo from "./components/home_video/HomeVideo";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header isNavbarVisible={isNavbarVisible} />}>
          <Route
            index
            element={
              <>
                <SearchPhoto />
                <HomePhoto />
              </>
            }
          />
          <Route
            path="video"
            element={
              <>
                <SearchVideo />
                <HomeVideo />
              </>
            }
          />
          <Route path="search" />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
