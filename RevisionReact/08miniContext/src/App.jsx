import React from 'react';
import UserContextProvider from './context/userContextProvider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  )
}

export default App
