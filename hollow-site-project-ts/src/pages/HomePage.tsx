import './HomePage.css';
import { Header } from '../components/Header';

export function HomePage() {
  return (
    <>
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
      </div>
    </>
  );
}