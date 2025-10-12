import './HomePage.css';
import { estimateHits } from '../utils/damage';
import { Header } from '../components/Header';
import { BossPage } from './bosses/BossPage';

export function HomePage() {
  return (
    <>
      <title>Homepage</title>

      <Header />

      <div>
        <h1 className="games-titles-paragraph">
          Hollow Knight and Hollow Knight: Silksong
        </h1>

        <p className="games-release-paragraph">
          Silksong released in September 4, 2025.
        </p>

        <p>
          The release price was R$60.00 - so cheap!
        </p>

        <button className="silksong-mainpage-button">
          Silksong Main Page
        </button>

        <button className="buy-now-button">
          Buy now
        </button>

        <p className="hit-calculator-text">
          Damage to kill Karmelita (with zero updates on needle!): {estimateHits(1500, 5)}
          <br />
          Damage to kill Lost Lace without needle upgrade: {estimateHits(1800, 5)}
          <br />
          Damage to kill Lost Lace with all upgrades: {estimateHits(1800, 21)}
        </p>

        <BossPage />
      </div>
    </>
  );
}