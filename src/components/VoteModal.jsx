import React, { useState, useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import { ModalContext } from "../context/ModalProvider";
import styles from "./VoteModal.module.css";

const VoteModal = () => {
  const { addVote } = useContext(VotesContext);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [name, setName] = useState("");
  const [candidate, setCandidate] = useState("Suresh");

  if (!isOpen) return null;

  const submitVote = () => {
    if (name.trim()) {
      addVote(name, candidate);
      setIsOpen(false);
      setName("");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>Cast Your Vote</h3>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={candidate} onChange={(e) => setCandidate(e.target.value)}>
          <option>Suresh</option>
          <option>Deepank</option>
          <option>Abhik</option>
        </select>
        <button onClick={submitVote}>Vote</button>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>
    </div>
  );
};

export default VoteModal;
