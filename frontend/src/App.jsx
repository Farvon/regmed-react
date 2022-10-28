import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import HeaderComponent from './components/HeaderComponent';
import MainContainer from './components/MainContainer';
import UserLogin from './components/UserLogin';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedRegMedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="*"
          element={
            user ? (
              <>
                <HeaderComponent user={user} />
                <MainContainer user={user} />
                <ToastContainer />
              </>
            ) : (
              <>
                <UserLogin setUser={setUser} />
                <ToastContainer />
              </>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
