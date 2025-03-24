import React from "react";
import VotingApp from "./components/VotingApp";
import VotingProvider from "./context/VotingProvider";
import ModalProvider from "./context/ModalProvider";
import styles from "./App.module.css";

const App = () => {
  return (
    <VotingProvider>
      <ModalProvider>
        <div className={styles.container}>
          <VotingApp />
        </div>
      </ModalProvider>
    </VotingProvider>
  );
};

export default App;
