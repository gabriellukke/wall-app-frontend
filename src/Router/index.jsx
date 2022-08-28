import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/wall" element={<Wall />} /> */}
    </Routes>
  );
}
