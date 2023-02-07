import React from 'react';
import './css/reset.css';
import './css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';
import LandingPage from './parts/LandingPage';
import Store from './parts/Store';
import GamePage from './parts/GamePage';
import Library from './parts/Library';
import Cart from './parts/Cart';
import AllFreeGames from './parts/AllFreeGames';
import { UserStorage } from './parts/context/UserContext';

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/allfreegames" element={<AllFreeGames />} />
          <Route path="/library" element={<Library />} />
          <Route path="/store/:id" element={<GamePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
