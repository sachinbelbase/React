import { useEffect, useState } from "react"

function App() {
  console.log("App render",Math.random())
  const [value, setValue] = useState({
    value: 0
  })
  // const[multipliedValue, setMultipliedValue] = useState(1)

  let multipliedValue = value * 5;

  // const mulitiplyBYfive = ()=>{
    // setMultipliedValue(value * 5 )
  //   setValue(value+1)
  // }

  const mulitiplyBYfive = ()=>{
    setValue({
      value: 0
    })
  }

  return (
    <>
    <h1>Main Value: {value.value}</h1>
      <button onClick={mulitiplyBYfive}>Click to Multiply by 5</button>
      <h3>Multiplied value:{multipliedValue}</h3>

    </>
  )
}

export default App
