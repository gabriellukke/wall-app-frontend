import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Wall } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/wall" element={<Wall />} />
      <Route path="/register" element={{}} />
    </Routes>
  );
}
