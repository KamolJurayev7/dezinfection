import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Xizmatlar from './components/Xizmatlar';
import RootPage from './components/RootPage';
import Haqimizda from './components/Haqimizda';
import Boglanish from './components/Boglanish';
import Asosiy from './components/Asosiy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<RootPage />} />
        <Route path='/xizmatlar' element={<Xizmatlar />} />
        <Route path='/asosiy' element={<Asosiy/>} />
        <Route path='/haqimizda' element={<Haqimizda />} />
        <Route path='/boglanish' element={<Boglanish />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
