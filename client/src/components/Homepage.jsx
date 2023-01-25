import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="mainContainer">
                <header className="navigationBar">
                <img src="/images/clubs/hajduk.png" className="Hajduk" width="100" height="auto"></img>    
                <Link to="/login">
                    <button>Logout</button>
                </Link>
                    <span className="username">Roko</span>     
                    <img src="/images/supersport.png" alt="Supersport" width="500" height="auto"></img>       
                </header>
                
                <div className="flexBuffer flexBuffer1">
                    <div className="infoBox">
                        <div className="infoLabel">
                            <h3 className="teamName">YOUR TEAM</h3>
                        </div>
                        <div className="infoLabel">
                            <label className="infoValue">€1M</label>
                            <label className="infoType">Budget left</label>
                        </div>
                        <div className="infoLabel">
                            <label className="infoValue">15/15</label>
                            <label className="infoType">Selected</label>
                        </div>
                    </div>
                    <div className="fieldBox">
                        <div className="attackersBox playersBox">
                            <div className="player">
                                <img className="playerJersey hajdukJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">LIVAJA</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey dinamoJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">PETKOVIć</label>
                            </div>                            
                            <div className="player">
                                <img className="playerJersey sibenikJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">DELIć</label>
                            </div>
                        </div>
                        <div className="midfieldersBox playersBox">
                            <div className="player">
                                <img className="playerJersey hajdukJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">GRGIć</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey dinamoJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">MISIć</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey osijekJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">CAKTAS</label>
                            </div>
                        </div>
                        <div className="defendersBox playersBox">
                            <div className="player">
                                <img className="playerJersey hajdukJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Mikanović</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey rijekaJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">BRAUT</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey slavenJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">SOLDO</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey lokomotivaJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">PIVARIć</label>
                            </div>
                        </div>
                        <div className="goalkeeperBox playersBox">
                            <div className="player">
                                <img className="playerJersey hajdukJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">KALINIć</label>
                            </div>
                        </div>
                    </div>
                    <div className="subsBox">
                        <div className="subPlayer">
                            <label className="subTag goalkeeperTag">GK: </label>
                            <label className="playerName">ŽIGER</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag defenderTag">DEF: </label>
                            <label className="playerName">MATKOVIĆ</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag midfielderTag">MID: </label>
                            <label className="playerName">FIOLIĆ</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag attackerTag">FWD: </label>
                            <label className="playerName">LOVRIĆ</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;