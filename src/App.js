import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import SearchPhoto from "./components/search/SearchPhoto";

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
          <Route path="video" element={<SearchPhoto />} />
        </Route>
      </Routes>
      {/* <HomePhoto /> */}
    </BrowserRouter>
  );
}

export default App;
