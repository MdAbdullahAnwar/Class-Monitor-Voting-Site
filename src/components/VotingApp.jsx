import React, { Fragment, useContext } from "react";
import { VotesContext } from "../context/VotingProvider";
import { ModalContext } from "../context/ModalProvider";
import CandidateList from "./CandidateList";
import VoteModal from "./VoteModal";
// import Result from "./Result";
import styles from "./VotingApp.module.css";

const VotingApp = () => {
  const { votes } = useContext(VotesContext);
  const { setIsOpen } = useContext(ModalContext);

  return (
    <Fragment>
      <VoteModal />
      <div className={styles.container}>
        <h1>Class Monitor Voting</h1>
        <h3>Total Votes: {votes.totalVotes}</h3>
        <button onClick={() => setIsOpen(true)} className={styles.voteButton}>Add New Vote</button>
        <CandidateList />
        {/* <Result /> */}
      </div>
    </Fragment>
  );
};

export default VotingApp;
