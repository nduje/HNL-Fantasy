import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Teams.css'
import { Link } from 'react-router-dom';

class Team extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mainContainer">
                <div className="flexBuffer flexBuffer1">
                    <div className="infoBox">
                        <div className="infoLabel">
                            <h3 className="teamName">Select your team</h3>
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
                <div className="flexBuffer flexBuffer2">
                    <div className="searchBar"> 
                        <div className="searchBuffer searchBuffer1">
                            <h1 className="searchText">Search Players</h1>
                            <input type="form" placeholder="Search Players"></input>
                        </div>
                        <div className="searchBuffer searchBuffer2">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Club</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hajduk</td>
                                        <td>Marko</td>
                                        <td>Livaja</td>
                                        <td>FWD</td>
                                    </tr>
                                    <tr>
                                        <td>Dinamo</td>
                                        <td>Bruno</td>
                                        <td>Petković</td>
                                        <td>FWD</td>
                                    </tr>
                                    <tr>
                                        <td>Šibenik</td>
                                        <td>Ivan</td>
                                        <td>Delić</td>
                                        <td>FWD</td>
                                    </tr>
                                    <tr>
                                        <td>Hajduk</td>
                                        <td>Lukas</td>
                                        <td>Grgić</td>
                                        <td>MID</td>
                                    </tr>
                                    <tr>
                                        <td>Dinamo</td>
                                        <td>Dino</td>
                                        <td>Mišić</td>
                                        <td>MID</td>
                                    </tr>
                                    <tr>
                                        <td>Hajduk</td>
                                        <td>Dino</td>
                                        <td>Caktaš</td>
                                        <td>MID</td>
                                    </tr>
                                    <tr>
                                        <td>Hajduk</td>
                                        <td>Dino</td>
                                        <td>Mikanović</td>
                                        <td>DEF</td>
                                    </tr>
                                    <tr>
                                        <td>Rijeka</td>
                                        <td>Filip</td>
                                        <td>Braut</td>
                                        <td>DEF</td>
                                    </tr>
                                    <tr>
                                        <td>Slaven</td>
                                        <td>Vinko</td>
                                        <td>Soldo</td>
                                        <td>DEF</td>
                                    </tr>
                                    <tr>
                                        <td>Lokomotiva</td>
                                        <td>Josip</td>
                                        <td>Pivarić</td>
                                        <td>DEF</td>
                                    </tr>
                                    <tr>
                                        <td>Hajduk</td>
                                        <td>Lovre</td>
                                        <td>Kalinić</td>
                                        <td>GK</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="searchBuffer searchBuffer3">
                            <Link to="/homePage">
                                <input type="submit" value="Save Team"></input>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Team;