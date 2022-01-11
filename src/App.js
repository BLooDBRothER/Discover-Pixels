import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import HomePhoto from "./components/home_photo/HomePhoto";
import Search from './components/search/Search';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <BrowserRouter>
      <Header isNavbarVisible={isNavbarVisible} />
      <Search />
      <HomePhoto />
    </BrowserRouter>
  );
}

export default App;
