import { useState } from 'react'

function App() {
let [color, setColor] = useState('olive')

  return (
  <div className="w-full h-screen duration-100" style={{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-5 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-xl
       bg-white padding px-3 py-3 rounded-xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
        style={{backgroundColor:"red"}}
         onClick={() => setColor('red')}>
          Red
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
           style={{ backgroundColor:"Green"}}
            onClick={() => setColor("green")}>
          Green
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
           style={{ backgroundColor:"Navy"}}
            onClick={() => setColor("navy")}>
          Navy
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large'
           style={{ backgroundColor:"Pink"}}
            onClick={() => setColor("pink")}>
          Pink
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
           style={{ backgroundColor:"Orange"}}
            onClick={() => setColor("orange")}>
          Orange
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
           style={{ backgroundColor:"Purple"}}
            onClick={() => setColor("purple")}>
          Purple
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-large'
           style={{ backgroundColor:"Brown"}}
            onClick={() => setColor("brown")}>
          Brown
        </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-large'
           style={{ backgroundColor:"Yellow"}}
            onClick={() => setColor("yellow")}>
          Yellow
        </button>
      </div>
    </div>
  </div>
  )
}
export default App
