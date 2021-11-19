import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar';
import './App.css';

function App() {
  const [user, setUser] = useState({name: 'Mo'})
  return (
    <main className="App">
      {
        user ?
        <>
          <Navbar/>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage/>} />
            <Route path="/orders/new" element={<NewOrderPage/>} />
          </Routes>
        </>
          :
          <AuthPage/>
      }
    </main>
  );
}

export default App;
