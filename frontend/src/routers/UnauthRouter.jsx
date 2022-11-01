import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';

const UnauthRouter = ({ setUser }) => {
  return (
    <Routes>
      <Route path="/" name="Home" element={<Home />} exact />
      <Route
        path="/login"
        name="Login"
        element={<Login setUser={setUser} />}
        exact
      />
      <Route path="/login/sign-up" name="SignUp" element={<SignUp />} exact />
    </Routes>
  );
};

export default UnauthRouter;
