import React, { useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import styles from "./Candidate.module.css";

const Candidate = ({ name }) => {
  const { votes, removeVote } = useContext(VotesContext);

  return (
    <div className={styles.candidate}>
      <h2>{name}</h2>
      <p>Total: {votes.candidates[name].length}</p>
      <ul>
        {votes.candidates[name].map((voter, index) => (
          <li key={index}>
            {voter}
            <button onClick={() => removeVote(name, voter)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Candidate;
