import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <BrowserRouter>
      <Header isNavbarVisible={isNavbarVisible} />
      <Search />
    </BrowserRouter>
  );
}

export default App;
