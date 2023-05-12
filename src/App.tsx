import React, { useState } from "react";
import styles from "./App.module.css";
import imcIcon from "./assets/imcIcon.png";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalulateButton = () => {
    if (heightField && weightField) {
    } else {
      alert("Digite todos os campos");
    }
  };
  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={imcIcon} alt="IMC Icon" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial da Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Exemplo: 1,73 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Exemplo: 63,5 (em kilogramas)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalulateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
}

export default App;
