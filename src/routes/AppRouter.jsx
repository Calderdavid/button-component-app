import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import { ButtonComponentPage } from '../ButtonComponent/ButtonComponentPage';
import { ColorsPage } from '../ButtonComponent/pages/ColorsPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<ButtonComponentPage />}/>
        <Route path="Buttons" element={<ButtonComponentPage />} />
        <Route path="Colors" element={<ColorsPage />} />
    </Routes>
  )
}
