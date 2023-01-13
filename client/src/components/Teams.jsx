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
                            <label className="infoValue">0/15</label>
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
                        <p>SEARCHBAR</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Team;