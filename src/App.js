import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import SearchPhoto from "./components/home_search/SearchPhoto";
import SearchVideo from "./components/home_search/SearchVideo";
import HomeVideo from "./components/home_video/HomeVideo";
import SearchPage from "./components/search_photo/SearchPage";
import SearchVideoPage from "./components/search_video/SearchVideoPage";

export const FilterChangeContext = React.createContext(null);
export const QueryChangeContext = React.createContext(null);

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
                <SearchPhoto setIsNavbarVisible={setIsNavbarVisible} />
                <HomePhoto />
              </>
            }
          />
          <Route
            path="video"
            element={
              <>
                <SearchVideo setIsNavbarVisible={setIsNavbarVisible} />
                <HomeVideo />
              </>
            }
          />
          <Route 
           path="search" >
             <Route path="image/:searchKey" element={<SearchPage setIsNavbarVisible={setIsNavbarVisible} />} />
             <Route path="video/:searchKey" element={<SearchVideoPage setIsNavbarVisible={setIsNavbarVisible} />} />
           </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
