import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Teams.css'

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
                            <label className="infoValue">€100M</label>
                            <label className="infoType">Budget</label>
                        </div>
                        <div className="infoLabel">
                            <label className="infoValue">1/15</label>
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
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>                            
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                        </div>
                        <div className="midfieldersBox playersBox">
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                        </div>
                        <div className="defendersBox playersBox">
                            <div className="player">
                                <img className="playerJersey hajdukJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Mikanović</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                        </div>
                        <div className="goalkeeperBox playersBox">
                            <div className="player">
                                <img className="playerJersey defaultJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">Add player</label>
                            </div>
                        </div>
                    </div>
                    <div className="subsBox">
                        <div className="subPlayer">
                            <label className="subTag goalkeeperTag">GK: </label>
                            <label className="playerName">Add player</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag defenderTag">DEF: </label>
                            <label className="playerName">Add player</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag midfielderTag">MID: </label>
                            <label className="playerName">Add player</label>
                        </div>
                        <div className="subPlayer">
                            <label className="subTag attackerTag">FWD: </label>
                            <label className="playerName">Add player</label>
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
                                        <td>Hajduk</td>
                                        <td>Dino</td>
                                        <td>Mikanović</td>
                                        <td>DEF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="searchBuffer searchBuffer3">
                            <input type="submit" value="Save Team"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Team;