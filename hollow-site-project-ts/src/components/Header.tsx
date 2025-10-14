import { Link } from 'react-router';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import './Header.css';
import HamburguerMenu from '../assets/hamburger-menu.svg';

export function Header() {
  const [backgroundTheme, setBackgroundTheme] = useState('white');

  function alternateBackgroundTheme(): void {
    if (backgroundTheme === 'white') {
      setBackgroundTheme('black');
      return;
    } else {
      setBackgroundTheme('white');
    }
  }

  const [sidebarState, setSidebarState] = useState(0);

  function toggleSidebar(): void {
    if (sidebarState === 0) {
      setSidebarState(1);
      return;
    } else {
      setSidebarState(0);
    }
  }

  return (
    <>
      <div 
        className={backgroundTheme === 'black' ? "header-grid-container black-header-container-theme" : "header-grid-container white-header-container-theme"}
      >
        <div 
        className="hamburger-menu-button"
        onClick={toggleSidebar}
        >
          <button>
            <img src={HamburguerMenu} />
          </button>
          
        </div>

        {sidebarState === 1 && <Sidebar />}

        <button className="home-button">
          <Link to="/">
            Home
          </Link>
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
          <Link className="hornet-route-link" to="/hornet">
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