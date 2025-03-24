import React, { useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import styles from "./Result.module.css";

const Result = () => {
  const { votes } = useContext(VotesContext);

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

  return <h3 className={styles.result}>{getWinner()}</h3>;
};

export default Result;
