import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import SearchPhoto from "./components/home_search/SearchPhoto";
import SearchVideo from "./components/home_search/SearchVideo";
import HomeVideo from "./components/home_video/HomeVideo";
import ImagePage from "./components/image_page/ImagePage";
import SearchPage from "./components/search_photo/SearchPage";
import SearchVideoPage from "./components/search_video/SearchVideoPage";
import VideoPage from "./components/video_page/VideoPage";

export const FilterChangeContext = React.createContext(null);
export const QueryChangeContext = React.createContext(null);

export const getRandomCategory = () => {
  const category = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", 'business', "music"];
  const min = 0, max = category.length;
  const random = Math.floor((Math.random() * (max - min) + min));
  return category[random];
}

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
           <Route path="image/:imageId" element={<ImagePage setIsNavbarVisible={setIsNavbarVisible} />}/>
           <Route path="vid/:videoId" element={<VideoPage setIsNavbarVisible={setIsNavbarVisible} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
