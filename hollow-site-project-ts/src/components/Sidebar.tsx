import './Sidebar.css';
import HornetIdle from '../assets/images/hornet-idle.webp';
import KnightIdle from '../assets/images/knight-idle.webp';
import CorniferIdle from '../assets/images/cornifer-idle.webp';
import ShakraIdle from '../assets/images/shakra-idle.webp';
import RadianceIdle from '../assets/images/radiance-idle.webp';
import HollowKnightIdle from '../assets/images/hollow-knight-idle.webp';

export function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-link">
          <img src={HornetIdle} />
          <div>Hornet</div>
        </div>

        <div className="sidebar-link-separate"></div>

        <div className="sidebar-link">
          <img src={KnightIdle} />
          <div>Knight</div>
        </div>

        <div className="sidebar-link-separate"></div>

        <div className="sidebar-link">
          <img src={CorniferIdle} />
          <div>Cornifer</div>
        </div>

        <div className="sidebar-link-separate"></div>

        <div className="sidebar-link">
          <img src={ShakraIdle} />
          <div>Shakra</div>
        </div>

        <div className="sidebar-link-separate"></div>

        <div className="sidebar-link">
          <img src={RadianceIdle} />
          <div>Radiance</div>
        </div>

        <div className="sidebar-link-separate"></div>

        <div className="sidebar-link">
          <img src={HollowKnightIdle} />
          <div>Hollow Knight</div>
        </div>  

        <div className="sidebar-link-separate"></div>
      </div>
    </>
  );
}