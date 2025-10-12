import { useState } from 'react';
import { Boss } from "./Boss";
import './BossGridDetails.css';
import { bosses } from "../../../data";

type Boss = {
  name: string,
  health: number,
  phases: number,
  area: string
};

export function BossGridDetails() {
  const [bossesList, setBossesList] = useState<Boss[]>([...bosses]);

  function addBoss(): void {
    setBossesList([
      ...bossesList,
      {
        name: "Seth",
        health: 1280,
        phases: 2,
        area: 'Left Underworks'
      }
    ]);
  }

  return (
    <>
      <h1 className="boss-grid-header">
        Let's practice Silksong bosses with the awesome features of <span className="boss-grid-header-highlight">Grid CSS!</span>
      </h1>

      <div className="bosses-grid-container">
              {bossesList.map((bossInfo) => {
                return (
                  <Boss 
                    key={crypto.randomUUID()}
                    bossObject={bossInfo} 
                  />
                );
              })}
      </div>

      <button
        className="add-boss-button"
        onClick={addBoss}
      >
        Add a Boss
      </button>
    </>
  );
}