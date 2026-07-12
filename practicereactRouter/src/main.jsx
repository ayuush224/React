import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout/>,
    children:[
      {
        index : true,
        element : <Home/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
