import { useState } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './HornetPage.css';
import BeastiarySilksong from '../assets/images/beastiary-silksong.png';
import HornetDialogue from '../assets/images/hornet-dialogue-bottom.png';
import Hornet from '../assets/images/hornet-idle.webp';

export function HornetPage() {
  const [toggleSummary, setToggleSummary] = useState(false);

  function toggleSummaryItems(): void {
    if (!toggleSummary) {
      setToggleSummary(true);
      return;
    } else {
      setToggleSummary(false);
    }
  }

  return (
    <>
      <title id="hornet-page-title">Hornet</title>

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

          <div className="hornet-summary-container">
            <img className="hornet-summary-image" src={BeastiarySilksong} />
            <div 
            onClick={toggleSummaryItems}
            >
              Conteúdo <span className="hide-and-show-button">[{toggleSummary ? "Esconder" : "Mostrar"}]</span>
            </div>

            {toggleSummary && (
              <ul className="hornet-summary-list">
                <li><a className="hornet-summary-list-item" href="#top">Topo</a></li>
                <li><a className="hornet-summary-list-item" href="#hornet-events-top">Eventos</a></li>
                <li><a className="hornet-summary-list-item" href="#hornet-trivia-top">Trivia</a></li>
              </ul>
            )}

            <img className="hornet-summary-image" src={HornetDialogue} />
          </div>
        </div>
      </div>

      <h2 id="hornet-events-top">
        Eventos
      </h2>

      <h3>
        A Protetora
      </h3>

      <p>
        Hornet é encontrada pela primeira vez na entrada de <span className="topic-word-highlight">Caminho Verde</span>, onde observa o Cavaleiro antes de se afastar. Ela é rapidamente vista mais duas vezes correndo para longe dele em meio à vegetação no Caminho do Peregrino. O Cavaleiro finalmente a alcança nas pedras eretas que marcam a entrada do <span className="topic-word-highlight">Lago de Unn</span>, de pé ao lado do corpo de outro <span className="topic-word-highlight">Receptáculo</span>. Relacionando a busca do Cavaleiro ao despertar da Infecção, ela não permite que ele prossiga. Eles entram em confronto e, quando derrotada, Hornet foge sem dizer uma palavra. 
      </p>

      <p>
        Hornet reaparece brevemente antes do final do Caminho do Peregrino nos <span className="topic-word-highlight">Ermos Fúngicos</span>, indo na direção da <span className="topic-word-highlight">Cidade das Lágrimas</span>. Mais tarde, ela alcança o Cavaleiro na Praça da Fonte, no meio da capital chuvosa. Finalmente entendendo a verdade por trás de sua origem e busca, ela os encoraja a aprender sobre o sacrifício de Hallownest. Ela então pergunta a ele antes de sair para encontrá-la na Casca do Wyrmm, sabendo a verdade, se o Cavaleiro ainda gostaria de participar da perpetuação de Hallownest. Este encontro não ocorre se o Cavaleiro tiver derrotado um Sonhador ou visitado qualquer uma das salas do lado de fora das lutas contra os chefes <span className="topic-word-highlight">Markoth</span> e a própria Hornet (Sentinela).
      </p>

      <h3>
        A Sentinela
      </h3>
      <p>
        Na Borda do Reino, Hornet deseja testar a determinação do Cavaleiro em mais uma batalha antes de lhe confiar o futuro de Hallownest. Após sua derrota lutando no seu máximo, ela permite que o Cavaleiro tenha a Marca do Rei queimada em sua casca. Ela acredita que eles continuariam sua busca mesmo depois de descobrirem a verdade de sua origem no fundo do Abismo. Sua confiança a obriga a salvar o Cavaleiro pego no colapso na Casca de Wyrm, preso sob pilhas de cinzas brancas. Ela vai embora novamente sem dizer uma palavra depois de salvá-lo.
      </p>

      <h3>
        Irmãos
      </h3>

      <p>
        Depois que o Cavaleiro adquire o Coração Vazio e enfrenta todos os três Sonhadores, Hornet espera por ele no Templo do Ovo Negro nas Encruzilhadas Esquecidas. Ela fica impressionada com a façanha dele de quebrar os selos e aceitar o Vazio dentro de si, apresentando-os como um ser excepcional. Assim que o Ovo Negro é aberto, ela diz ao Cavaleiro que não pode segui-los para dentro, pois o ovo, construído para sustentar os Receptáculos Puros, a drenaria caso ela se juntasse. Ela, no entanto, promete ajudar da melhor forma possível se houver uma abertura.
      </p>

      <h2 id="hornet-trivia-top">
        Curiosidades / Trivia
      </h2>

      <Footer />
    </>
  );
}