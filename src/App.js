import './App.css';
import React from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import WorksPage from './WorksPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import { useState, useEffect } from 'react';

export const WindowContext = React.createContext(null);

export default function App() {
  const [browserWindow, setBrowserWindow] = useState(
    {
      height: window.innerHeight,
      width: window.innerWidth,
      isMobile: isMobileWindow(window.innerWidth)
    }
  );

  function isMobileWindow(width) { return width <= 768 };

  function handleWindowSizeChange() {
    setBrowserWindow({ window: window.innerWidth, height: window.innerHeight, isMobile: isMobileWindow(window.innerWidth) });
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div>
      <WindowContext.Provider value={{ browserWindow: browserWindow }}>
        <NavBar />
        <Routes>
          <Route exact path="/" Component={WorksPage} />
          <Route exact path="/works" Component={WorksPage} />
          <Route exact path="/about" Component={AboutPage} />
          <Route path='/projects/*' Component={ProjectPage} />
        </Routes>
      </WindowContext.Provider>
    </div>
  );
}