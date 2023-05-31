import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path={"/user/add"} element={<UserDetails />} />
      <Route path={`/user/:userId`} element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;



