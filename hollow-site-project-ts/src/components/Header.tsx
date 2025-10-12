import { Link } from 'react-router';
import { useState } from 'react';
import './Header.css';

export function Header() {
  const [backgroundTheme, setBackgroundTheme] = useState('white');

  function alternateBackgroundTheme(): void {
    if (backgroundTheme === 'white') {
      setBackgroundTheme('black');
    } else {
      setBackgroundTheme('white');
    }
  }

  return (
    <>
      <div 
        className={backgroundTheme === 'black' ? "header-grid-container black-header-container-theme" : "header-grid-container white-header-container-theme"}
      >
        <button className="home-button">
          Home
        </button>

        <button className="maps-button">
          Maps
        </button>

        <button className="bosses-button">
          Bosses
        </button>

        <button className="enemies-button">
          Enemies
        </button>

        <button className="npcs-button">
          NPCs
        </button>

        <button className="tools-button">
          Tools
        </button>

        <button className="crests-button">
          Crests
        </button>

        <button className="acts-button">
          Acts
        </button>

        <button className="weavers-button">
          Weavers
        </button>

        <button className="hornet-button">
          <Link to="/hornet">
            Hornet
          </Link>
        </button>

        <button 
          className="alternate-background-button"
          onClick={alternateBackgroundTheme}
        >
          Alternate Background
        </button>
      </div>
    </>
  );
}