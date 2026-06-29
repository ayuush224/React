import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>Custom App !</h1>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
);

const anotheruser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href : "https://google.com", target : "_blank"},
    'Click me to visit Google', anotheruser
);

ReactDOM.createRoot(document.getElementById('root')).render(
    // reactElement
    // <App/>
    MyApp()
);