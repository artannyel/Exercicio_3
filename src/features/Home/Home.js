import React, { useState } from 'react'
import './Home.css';

function Home(props) {

  const [titulo] = useState(props.titulo);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [classSoma, setClassSoma] = useState("Sucess");
  const [soma, setSoma] = useState("Digite os valores para somar");

  function somar() {
    if (number1 !== '' && number2 !== '') {
      let s = parseInt(number1) + parseInt(number2);
      setClassSoma("Sucess");
      setSoma(s);
    }
    else if (number1 === '' && number2 === '') {
      setClassSoma("Erro");
      setSoma("Insira os dois valores!");
    }
    else if (number1 === '') {
      setClassSoma("Erro");
      setSoma("Falta o valor 1!");
    } else {
      setClassSoma("Erro");
      setSoma("Falta o valor 2!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <font className="Titulo">{titulo}</font>
        <div className="row">
          <input onChange={(event) => { setNumber1(event.target.value) }} className="Number" type="number"></input>
          <input onChange={(event) => { setNumber2(event.target.value) }} className="Number" type="number"></input>
        </div>
        <input className="Button" type="button" value="+" onClick={somar}></input>
        <div>
          <font className={classSoma}>{soma}</font>
        </div>
      </header>
    </div>
  );
}

export default Home;