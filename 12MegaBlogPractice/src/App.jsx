import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import {Header, Footer} from "./component/index.js";
import { Outlet } from 'react-router';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      } else {
        dispatch(logout());
      }
    })
    .catch((error) => console.log("Loading error :=> ", error))
    .finally(() => setLoading(false));
  },[]);

  return (!loading ? (
    <div className='min-h-screen bg-gray-600 text-white text-center'>
      <Header />
      <main>
        Todo :
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null);
}

export default App;