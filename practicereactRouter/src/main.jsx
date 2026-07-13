import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import Github, { githubInfoLoader } from './components/Github/Github'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/contact'
import About from './components/About/About'
import User from './components/User/User'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Layout/>,
//     children:[
//       {
//         index : true,
//         element : <Home/>
//       },
//       {
//         path : "contact",
//         element: <Contact/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         loader:githubInfoLoader,
//         path : "github",
//         element : <Github/>
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index={true} element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userId" element={<User/>}/>

      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github/>}
      />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
