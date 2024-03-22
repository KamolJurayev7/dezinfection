import React from 'react'
import Asosiy from './components/Asosiy';
import Boglanish from './components/Boglanish';
import Haqimizda from './components/Haqimizda';
import Navbar from './components/Navbar';
import Xizmatlar from './components/Xizmatlar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='trade-winds-regular'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
