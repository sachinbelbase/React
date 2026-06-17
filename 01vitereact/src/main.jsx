import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    const anotherUser = "Code and Talk"
    return(
        <div>
        <h2>We can create a coponent inside main || Custom App</h2>
        <h3>yohohohohoh</h3>
        {anotherUser}
        </div>
        
    )
}

const anotherElements = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click Me to visit Google'
)

createRoot(document.getElementById('root')).render(
    // reactElement
    // anotherElements
    <App/>
)
