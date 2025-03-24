import React, { createContext, useState } from "react";

export const VotesContext = createContext();

const VotingProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    totalVotes: 0,
    candidates: {
      Suresh: [],
      Deepank: [],
      Abhik: [],
    },
  });

  const addVote = (name, candidate) => {
    setVotes((prev) => ({
      totalVotes: prev.totalVotes + 1,
      candidates: {
        ...prev.candidates,
        [candidate]: [...prev.candidates[candidate], name],
      },
    }));
  };

  const removeVote = (candidate, name) => {
    setVotes((prev) => ({
      totalVotes: prev.totalVotes - 1,
      candidates: {
        ...prev.candidates,
        [candidate]: prev.candidates[candidate].filter((voter) => voter !== name),
      },
    }));
  };

  return (
    <VotesContext.Provider value={{ votes, addVote, removeVote }}>
      {children}
    </VotesContext.Provider>
  );
};

export default VotingProvider;
