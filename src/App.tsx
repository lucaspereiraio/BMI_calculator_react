import React from "react";
import styles from "./App.module.css";
import imcIcon from "./assets/imcIcon.png";

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
        <img src={imcIcon} alt="IMC Icon" width={150} />
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>...</div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
}

export default App;
