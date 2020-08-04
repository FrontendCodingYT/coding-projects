import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ContentSection from "./components/content-section/ContentSection";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Sidebar />
      <ContentSection />
    </div>
  );
}

export default App;
