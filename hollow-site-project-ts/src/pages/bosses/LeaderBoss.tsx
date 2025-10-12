import { useState } from 'react';
import './LeaderBoss.css';

export function LeaderBoss() {
  const [bossVotes, setBossVotes] = useState(0);

  function incrementBossVotes(): void {
    setBossVotes(bossVotes + 1);
  }

  return (
    <>
      <p 
        className="highest-vote-quantity-text"
      >
        The boss with most votes was: Lost Lace
      </p>

      <br />

      <button 
        className="highest-vote-quantity-button"
        onClick={incrementBossVotes}
      >
        Do you want to vote her?
      </button>

    <p 
      className="votes-quantity-text"
    >
      Number of votes in this boss currently is: {bossVotes}
    </p>

    <p 
    className="explanation-text"
    >
      This section are about how difficult is considered the hardest boss on the game (by audience opinion, for sure). <span className="explanation-text-highlight">Get this right above! &#62;</span>
    </p>
    </>
  );
}