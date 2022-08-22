import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import { ButtonComponentPage } from '../ButtonComponent/ButtonComponentPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<ButtonComponentPage/>}/>
    </Routes>
  )
}
