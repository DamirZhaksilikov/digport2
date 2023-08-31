import './App.css';
import React from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import WorksPage from './WorksPage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={WorksPage} />
        <Route exact path="/works" Component={WorksPage} />
        <Route exact path="/about" Component={AboutPage} />
        <Route path='/projects/*' Component={ProjectPage} />
      </Routes>
    </div>
  );
}