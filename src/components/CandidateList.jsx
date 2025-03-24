import React, { useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import Candidate from "./Candidate";
import styles from "./CandidateList.module.css";

const CandidateList = () => {
  const { votes } = useContext(VotesContext);

  return (
    <div className={styles.list}>
      {Object.keys(votes.candidates).map((candidate) => (
        <Candidate key={candidate} name={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;
