import React from 'react';
import { Routes, Route } from 'react-router';
import './index.css';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <>
    <Routes>
      <Navbar />
      <Route exact path="/" element={<Rockets />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default App;
