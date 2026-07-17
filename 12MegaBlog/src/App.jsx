import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './component/index'

function App(){
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout({}));
      }
    })
    .catch((error) => console.log("Error : ", error))
    .finally(() => setLoading(false));
  }, []) 

  return !loading ? (
    <div className='min-h-screen bg-[#212121] text-white
    flex flex-wrap content-between'>
      <div className='w-full block text-center'>
        <Header/>
          <main>
            Todo : {/* <Outlet/> */}
          </main>
        <Footer/>
      </div>
    </div>
  ) : (null);
}

export default App;