import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/registerPage/registerPage';
import InitialPage from './pages/initialPage/initialPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
