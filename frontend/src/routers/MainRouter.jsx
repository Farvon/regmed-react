import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthRouter from './AuthRouter';
import UnauthRouter from './UnauthRouter';

const MainRouter = () => {
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
      {user ? <AuthRouter /> : <UnauthRouter setUser={setUser} />}
      <ToastContainer />
    </BrowserRouter>
  );
};

export default MainRouter;
