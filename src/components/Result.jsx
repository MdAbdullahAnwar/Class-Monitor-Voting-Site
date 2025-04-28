import React, { useContext, useState } from "react";
import { VotesContext } from "../context/VotingProvider";
import styles from "./Result.module.css";

const Result = () => {
  const { votes } = useContext(VotesContext);
  const [showResult, setShowResult] = useState(false);

  const getWinner = () => {
    const candidates = votes.candidates;
    const voteCounts = Object.entries(candidates).map(([name, votes]) => ({
      name,
      count: votes.length,
    }));

    voteCounts.sort((a, b) => b.count - a.count);
    if (voteCounts[0].count === 0) return "No votes casted yet";

    const topVotes = voteCounts[0].count;
    const winners = voteCounts.filter((c) => c.count === topVotes).map((c) => c.name);

    if (winners.length > 1) return `There is a tie between ${winners.join(" and ")}`;
    return `Winner is ${winners[0]}`;
  };

  return (
    <div className={styles.resultContainer}>
      <button 
        className={styles.showResultButton}
        onClick={() => setShowResult(!showResult)}
      >
        {showResult ? "Hide Result" : "Show Result"}
      </button>
      {showResult && (
        <div className={styles.resultText}>
          {getWinner()}
        </div>
      )}
    </div>
  );
};

export default Result;