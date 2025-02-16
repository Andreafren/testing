import {useState} from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function somma(a, b) {
    return a + b;
  }
  function sottrazione(a, b) {
    return a - b;
  }
  function divisione(a, b) {
    if (b === 0) return "Errore: divisione per zero";
    return a / b;
  }
  function moltiplicazione(a, b) {
    return a * b;
  }

  return (
    <>
      <div></div>
      <h1>Calcolatrice</h1>
      <div className="card">
        <div>
          <label htmlFor="numero1">Numero 1</label>
          <input
            id="numero1"
            placeholder='Numero 1'
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="numero2">Numero 2</label>
          <input
            id="numero2"
            placeholder='Numero 2'
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button onClick={() => setCount(somma(num1, num2))}>+</button>
          <button onClick={() => setCount(sottrazione(num1, num2))}>-</button>
          <button onClick={() => setCount(divisione(num1, num2))}>/</button>
          <button onClick={() => setCount(moltiplicazione(num1, num2))}>
            *
          </button>
        </div>
        <div>
          <h2>Risultato: {count}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
