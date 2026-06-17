import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username:"Sachin",
    age:19
  }

  let newArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind CSS</h1> 
      <Card username="Code with Sachin" btnText="View More"/>
      <Card username="Sachin"/>
    </>
  )
}

export default App
