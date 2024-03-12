import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import { General } from '../pages/General';
import { Short } from '../pages/Short'

export const App = () => {
  return (
    <>
      <header>
        <Link to='/'>Головна</Link>
        <Link to='/short'>Коротка інформація</Link> 
      </header>
      <Routes>
        <Route path='/' element={<General />}></Route>
        <Route path='/short' element={<Short/> }></Route>
      </Routes>
    </>
)
};

export default App;



