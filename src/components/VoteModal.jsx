import React, { useState, useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import { ModalContext } from "../context/ModalProvider";
import styles from "./VoteModal.module.css";

const VoteModal = () => {
  const { addVote } = useContext(VotesContext);
  const { isOpen, closeModal } = useContext(ModalContext);
  const [name, setName] = useState("");
  const [candidate, setCandidate] = useState("Suresh");

  const submitVote = () => {
    if (name.trim()) {
      addVote(name, candidate);
      closeModal();
      setName("");
      setCandidate("Suresh");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3>Cast Your Vote</h3>
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <select value={candidate} onChange={(e) => setCandidate(e.target.value)}>
          <option value="Suresh">Suresh</option>
          <option value="Deepank">Deepank</option>
          <option value="Abhik">Abhik</option>
        </select>
        <div className={styles.buttonGroup}>
          <button onClick={submitVote}>Vote</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;