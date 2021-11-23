import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar';
import './App.css';

import {getUser} from '../../utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <p>{user && user.name}</p>
      {
        user ?
        <>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage/>} />
            <Route path="/orders/new" element={<NewOrderPage/>} />
          </Routes>
        </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
