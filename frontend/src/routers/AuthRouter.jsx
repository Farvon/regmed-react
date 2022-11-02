import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import WelcomePage from '../components/WelcomePage';
import AdminContainer from '../components/AdminContainer';
import SearchResult from '../components/SearchResult';
import LayoutAuth from '../layout/LayoutAuth';
import InfoPaciente from '../components/InfoPaciente';
import AddPaciente from '../components/AddPaciente';

const AuthRouter = () => {
  const [user, setUser] = useState();
  const [dni, setDni] = useState();

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedRegMedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return (
    <LayoutAuth>
      <Routes>
        <Route
          path="/"
          name="menu"
          element={
            <>
              {user && user.username === 'admin' ? (
                <AdminContainer />
              ) : (
                <WelcomePage setDni={setDni} />
              )}
            </>
          }
          exact
        />
        <Route
          path="/search"
          name="search"
          element={
            <>
              <SearchResult dni={dni} setDni={setDni} />
            </>
          }
          exact
        />
        <Route
          path="/info"
          name="info"
          element={
            <>
              <InfoPaciente dni={dni} setDni={setDni} />
            </>
          }
          exact
        />
        <Route
          path="/add-pacient"
          name="add-pacient"
          element={
            <>
              <AddPaciente />
            </>
          }
          exact
        />
      </Routes>
    </LayoutAuth>
  );
};

export default AuthRouter;
