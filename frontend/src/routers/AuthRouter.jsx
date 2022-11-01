import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderComponent from '../components/HeaderComponent';
import MainContainer from '../components/MainContainer';
import AdminContainer from '../components/AdminContainer';

const UnauthRouter = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedRegMedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        name="Menu"
        element={
          <>
            <HeaderComponent />
            {user && user.username === 'admin' ? (
              <AdminContainer />
            ) : (
              <MainContainer />
            )}
          </>
        }
        exact
      />
    </Routes>
  );
};

export default UnauthRouter;
