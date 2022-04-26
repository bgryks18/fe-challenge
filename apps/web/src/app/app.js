import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.scss';
import MainPage from './pages/MainPage';
import Search from './components/search';
import NotFound from './components/notFound';
const App = () => {
  return (
    <div id="content">
      <div id="bar"></div>
      <div id="header">
        <div>
          <h1>MagicHesap</h1>
          <p>Hesap Uzmanı</p>
        </div>
      </div>
      <Routes>
        <Route index element={<Search />} />
        <Route path="deneme" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
