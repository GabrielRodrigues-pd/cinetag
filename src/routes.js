import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Favoritos } from 'pages/Favoritos';
import { Home } from 'pages/Home';
import { Player } from 'pages/Player';
import { NotEncontrada } from 'pages/NaoEncontrada';
import { PaginaBase } from 'pages/PaginaBase';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
