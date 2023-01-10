import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Field.css'

class Field extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mainContainer">
                <div className="flexBuffer">
                    <div className="infoBox">
                        <p>INFO</p>
                    </div>
                    <div className="subsBox">
                        <p>SUBSBOX</p>
                    </div>
                </div>
                <div className="flexBuffer">
                    <div className="fieldBox">
                        <div className="attackersBox playersBox">
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">LIVAJA</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">NAPADAČ</label>
                            </div>                            
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">NAPADAČ</label>
                            </div>
                        </div>
                        <div className="midfieldersBox playersBox">
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">VEZNJAK</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">VEZNJAK</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">VEZNJAK</label>
                            </div>
                        </div>
                        <div className="defendersBox playersBox">
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">BRANIČ</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">BRANIĆ</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">BRANIČ</label>
                            </div>
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">BRANIČ</label>
                            </div>
                        </div>
                        <div className="goalkeeperBox playersBox">
                            <div className="player">
                                <img className="playerJersey" src="/images/jersey.png" alt="jersey"></img>
                                <label className="playerName">VRATAR</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Field;