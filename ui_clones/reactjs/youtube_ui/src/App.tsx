import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ContentSection from "./components/content-section/ContentSection";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="page-container">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Sidebar />
      <ContentSection searchValue={searchValue} />
    </div>
  );
}

export default App;
