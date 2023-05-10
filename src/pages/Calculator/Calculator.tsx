import { useState } from "react";

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0"]
]

export const operations = ["+", "-", "*", "/"];
export const equalSign = "="

export const Calculator = () => {
  const [value, setValue] = useState("")

  return <>
  <h1>Calculator</h1>
  <input type="text" value={value} readOnly/>
  <div role="grid">
  {
    rows.map((row, index) => <div role="row" key={index}>
      {row.map(number => <button onClick={() => setValue(value.concat(number))} key={number}>{number}</button>)}
    </div>)
  }
  <div>
    {
      operations.map(operation => <button key={operation} onClick={() => setValue(value.concat(operation))}>{operation}</button>)
    }
    <button onClick={() => setValue(eval(value))}>{equalSign}</button>
  </div>
  </div>
  </>
  
}
