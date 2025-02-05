import React from 'react';
import './Cards.css';
import img1 from '../assets/playlist/1.jpeg';
import img2 from '../assets/playlist/2.png'; // Corrigi o nome da variável (era "img" antes)
import img3 from '../assets/playlist/3.jpeg';
import img4 from '../assets/playlist/4.jpeg';
import img5 from '../assets/playlist/5.jpeg';
import img6 from '../assets/playlist/6.jpeg';
import img7 from '../assets/playlist/7.jpeg';
import img8 from '../assets/playlist/8.jpeg';
import img9 from '../assets/playlist/9.jpeg';
import img10 from '../assets/playlist/10.jpeg';
import img11 from '../assets/playlist/11.jpeg';
import img12 from '../assets/playlist/12.jpeg';
import img13 from '../assets/playlist/13.jpeg';
import img14 from '../assets/playlist/14.jpeg';
import img15 from '../assets/playlist/15.jpeg';


const Cards = () => {
    return (
        <nav className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                {/* LISTA DE CARDS */}
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* CARD 1 */}
                            <a href="/" className="cards">
                                <div className="cards card1">
                                    <img src={img1} alt="Boas festas" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            {/* CARD 2 */}
                            <a href="/" className="cards">
                                <div className="cards card2">
                                    <img src={img2} alt="Feitos para você" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            {/* CARD 3 */}
                            <a href="/" className="cards">
                                <div className="cards card3">
                                    <img src={img3} alt="Lançamentos" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            {/* CARD 4 */}
                            <a href="/" className="cards">
                                <div className="cards card4">
                                    <img src={img4} alt="Creators" />
                                    <span>Creators</span>
                                </div>
                            </a>

                            {/* CARD 5 */}
                            <a href="/" className="cards">
                                <div className="cards card5">
                                    <img src={img5} alt="Para treinar" />
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            {/* CARD 6 */}
                            <a href="/" className="cards">
                                <div className="cards card6">
                                    <img src={img6} alt="Podcasts" />
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            {/* CARD 7 */}
                            <a href="/" className="cards">
                                <div className="cards card7">
                                    <img src={img7} alt="Sertanejo" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            {/* CARD 8 */}
                            <a href="/" className="cards">
                                <div className="cards card8">
                                    <img src={img8} alt="Samba e pagode" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            {/* CARD 9 */}
                            <a href="/" className="cards">
                                <div className="cards card9">
                                    <img src={img9} alt="Funk" />
                                    <span>Funk</span>
                                </div>
                            </a>

                            {/* CARD 10 */}
                            <a href="/" className="cards">
                                <div className="cards card10">
                                    <img src={img10} alt="MPB" />
                                    <span>MPB</span>
                                </div>
                            </a>

                            {/* CARD 11 */}
                            <a href="/" className="cards">
                                <div className="cards card11">
                                    <img src={img11} alt="Rock" />
                                    <span>Rock</span>
                                </div>
                            </a>

                            {/* CARD 12 */}
                            <a href="/" className="cards">
                                <div className="cards card12">
                                    <img src={img12} alt="Hip Hop" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            {/* CARD 13 */}
                            <a href="/" className="cards">
                                <div className="cards card13">
                                    <img src={img13} alt="Indie" />
                                    <span>Indie</span>
                                </div>
                            </a>

                            {/* CARD 14 */}
                            <a href="/" className="cards">
                                <div className="cards card14">
                                    <img src={img14} alt="Relax" />
                                    <span>Relax</span>
                                </div>
                            </a>

                            {/* CARD 15 */}
                            <a href="/" className="cards">
                                <div className="cards card15">
                                    <img src={img15} alt="Música Latina" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>

            {/* SEÇÃO DO ARTISTA (OCULTA) */}
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="Artista" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="/">
                                <span className="artist-name" id="artist-name">Nome do Artista</span>
                                <span className="artist-categorie">Artista</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Cards;