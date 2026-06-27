import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login ,logout} from "./store/authStore"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from "react-router-dom"


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
          dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])


  // console.log(conf.appWriterUrl); 
  // console.log(process.meta.env.REACT_APP_APPWRITER_URL); for create react app

   return !loading ? <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className='w-full block'>
      <Header />
      <main>
        TODO: <Outlet />
      </main>
      <Footer />
    </div>
   </div> : "loading..."
}

export default App
