import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 10) {

      // setCounter(counter + 1)
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )


    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h1>Code with Sachin</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue} >
        Add Counter {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>
        Remove Counter {counter}</button>
    </div>
  )
}

export default App












