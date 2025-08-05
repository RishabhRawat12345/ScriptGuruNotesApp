
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register3 from '../Auth/Register3';
import Login from '../Auth/Login';
import Front from '../Auth/front';
import Home from '../Components/Home';
import CreateNotes from '../Components/CreateNotes';
import AllNotes from '../Components/AllNotes';
const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Front/>} />
      <Route path="/Register3" element={<Register3/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<CreateNotes/>}/>
      <Route path='/events' element={<AllNotes/>}/>
    </Routes>
  );
};

export default Approutes;
