import { Header } from '../components/Header';
import './HornetPage.css';
import BeastiarySilksong from '../assets/images/beastiary-silksong.png';
import HornetDialogue from '../assets/images/hornet-dialogue-bottom.png';
import Hornet from '../assets/images/hornet-idle.webp';

export function HornetPage() {
  return (
    <>
      <title>Hornet</title>

      <Header />
      
      <div className="hornet-main-container">
        <h1>
          Hornet (Silksong and Hollow Knight)
        </h1>

        <aside className="hornet-content-aside">
          <h2 className="hornet-aside-title">
            Hornet
          </h2>

          <ul className="hornet-aside-list">
            <li className="hornet-aside-list-item">Hornet</li>
            <li className="hornet-aside-list-item">Red Memory</li>
          </ul>

          <div>
            <figure>
              <img 
                className="hornet-image-aside" 
                src={Hornet} 
              />


            </figure>
          </div>

          <div className="hornet-aside-item">
            <h3>Weapon</h3>
            <p>Needle</p>
          </div>

          <div className="hornet-aside-item">
            <h3>Equipment</h3>
            <p>Tools</p>
          </div>

          <div className="hornet-aside-item">
            <h3>Energy Source</h3>
            <p>Silk</p>
          </div>

          <div className="hornet-aside-item">
            <h3>Gender</h3>
            <p>Female</p>
          </div>

          <div className="hornet-aside-item">
            <h3>Voice Actor</h3>
            <p>Makoto Koji</p>
          </div>
        </aside>

        <div className="hornet-main-content">
          <div className="beastiary-entry-container">
            <figure>
              <img src={BeastiarySilksong} />
            </figure>

            <p className="beastiary-text">
              I have already stood sentinel for one dying land. That role... I will never play again. While I live, and possess the strength to resist, this kingdom, and the bugs within it, shall not fall.
            </p>

            <figure>
              <img src={HornetDialogue} />
            </figure>
          </div>

          <p className="hornet-section-text">
            Hornet é a misteriosa princesa protetora das ruínas de <span className="topic-word-highlight">Hallownest</span>, uma personagem importante em <span className="topic-word-highlight">Hollow Knight</span> e protagonista jogável de <span className="topic-word-highlight">Hollow Knight: Silksong</span>. Ela empunha uma <span className="topic-word-highlight">Agulha</span> e um fio com destreza mortal.[3] Hornet é capturada por insetos estranhos e trazida para seu reino, <span className="topic-word-highlight">Pharloom</span>, mas ela escapa de sua jaula antes de chegar ao seu destino. Ela então deve lutar contra inimigos e resolver mistérios para ascender em uma peregrinação mortal ao topo do reino.
          </p>
        </div>
      </div>
    </>
  );
}