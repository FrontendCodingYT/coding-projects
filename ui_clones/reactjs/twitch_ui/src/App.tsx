import React from 'react';
import './App.css';
import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div id="landing">
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
