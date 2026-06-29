import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Default props
// function Card({name = "Guest", size = "md"}){
//   return (
//     <h1>Hiii {name}</h1>
//   );
// };

//Children Props
// function Card({saktiman, children}){
//   return (
//     <div className='card'>
//       {saktiman} {children}
//     </div>
//   )
// }

createRoot(document.getElementById('root')).render(
  <App/>
  // <Card saktiman={"Hello"} children ={"Hsiiiisin"}>
  //   <p style={{display : "inline"}}>Hii how are you</p>
  // </Card>
);
