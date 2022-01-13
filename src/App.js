import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import Search from "./components/search/Search";

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
                <Search />
                <HomePhoto />
              </>
            }
          />
          <Route path="video" element={<Search />} />
        </Route>
      </Routes>
      {/* <HomePhoto /> */}
    </BrowserRouter>
  );
}

export default App;
