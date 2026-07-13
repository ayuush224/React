import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home'
import Contact from './components/Contact/contact'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children:[
      {
        index : true,
        element : <Home/>
      },
      {
        path : "contact",
        element: <Contact/>
      },
      {
        path : "about",
        element : <About/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
