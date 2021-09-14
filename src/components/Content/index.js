import React, { useState } from "react";

import "./style.css";

export default function Content() {
  const [defaultInputValue, setDefaultInputValue] = useState("");

  function defaultInputChange(event) {
    if (isNaN(event.target.value)) {
      return;
    }
    setDefaultInputValue(event.target.value);
    event.preventDefault();
  }

  function DefaultCalc(event) {
    if (!defaultInputValue || defaultInputValue === "0") {
      document.getElementById(
        "DefaultResult"
      ).innerHTML = `O peso é um valor obrigatório.`;
      return event.preventDefault();
    } else {
      const number = Number(defaultInputValue);
      const result = eval(number / 30);
      /*
      Primeiro vamos tirar o peso da carcaça (ossos, cornos, couro...) que equivale a 50% do peso.
      Após isso, dividimos por 15, já que uma arroba é 15kg.
      Para simplificar a conta fazemos o calculo com 30 de uma vez.
      */

      document.getElementById("DefaultResult").innerHTML = `${result}@`;
    }
    event.preventDefault();
  }

  const [barrigaInputValue, setBarrigaInputValue] = useState("");

  function barrigaInputChange(event) {
    if (isNaN(event.target.value)) {
      return;
    }
    setBarrigaInputValue(event.target.value);
    event.preventDefault();
  }

  function BarrigaCalc(event) {
    if (!barrigaInputValue || barrigaInputValue === "0") {
      document.getElementById(
        "BarrigaResult"
      ).innerHTML = `O peso é um valor obrigatório.`;
      return event.preventDefault();
    } else {
      const number = Number(barrigaInputValue);
      const arroba = eval(number / 30);
      //Calculando a arroba.
      const etapa1 = eval(number / 2);
      //Removendo o peso do couro, cornos, ossos...
      const etapa2 = eval(etapa1 - arroba);
      //Quando o animal não dorme no  curral, precisamos remover 1kg por arroba.
      const result = eval(etapa2 / 15);
      //Para calcular a arroba final, dividimos o resultado por 15.
      document.getElementById("BarrigaResult").innerHTML = `${result}@`;
    }
    event.preventDefault();
  }

  return (
    <div className="Content">
      <div className="DivCalc">
        <h1>Padrão</h1>
        <p>
          A conta padrão é utilizada quando o animal dorme no curral ou quando é
          um bezerro de até 6 mêses de idade.
        </p>
        <div className="Calc">
          <form onSubmit={DefaultCalc}>
            <input
              placeholder="Digite o peso da balança em kg"
              onChange={defaultInputChange}
              value={defaultInputValue}
            />
          </form>
        </div>
        <h2 id="DefaultResult" className="Result">
          {null}
        </h2>
      </div>
      <hr />
      <div className="DivCalc">
        <h1>Barriga cheia</h1>
        <p>
          Esse calculo é utilizado quando o bovino não dorme no curral, então a
          barriga pode estar cheia, removemos 1kg por arroba.
        </p>
        <div className="Calc">
          <form onSubmit={BarrigaCalc}>
            <input
              placeholder="Digite o peso da balança em kg"
              onChange={barrigaInputChange}
              value={barrigaInputValue}
            />
          </form>
        </div>
        <h2 id="BarrigaResult" className="Result">
          {null}
        </h2>
      </div>
    </div>
  );
}
