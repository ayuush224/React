import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import React from 'react';


// there is no need to export this function, but just to remove the red lines
// i have exported this fucntion
export function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

//this will not work here because vite does not work the same way for the react element
//there is some other way in which it converts an jsx to react element
// const ReactElement = {
//     type : 'a',
//     props : {
//         href : "https:/google.com",
//         target : "_blank"
//     },
//     children : "Click me to visit google"
// };

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
);

const anotherUser = "Chai aur react"
// it is the defined way of the vite library for writing a reactElement object
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : "_blank"},
  'Click me to visit google',
  anotherUser
);

createRoot(document.getElementById('root'))
.render(
  <>
    <App />
    <MyApp />
    {MyApp()}
    {anotherElement}
    {<div></div>} {/* // just adding to break the line */}
    {reactElement}
  </>
)
