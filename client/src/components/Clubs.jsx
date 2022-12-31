import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Clubs.css'

class ClubsMenu extends Component {
    state = {  } 
    render() { 
        return (
            <div className="wrapper">
                <div class="titleContainer">
                    <h1 className="title">Pick Favourite Club</h1>
                </div>
                <div className="clubsContainer">
                    <div className="hajdukContainer clubContainer">
                        <img className="club" id="hajduk" src="/images/clubs/hajduk.png" alt="Hajduk"></img>
                    </div>
                    <div className="dinamoContainer clubContainer">
                        <img className="club" id="dinamo" src="/images/clubs/dinamo.png" alt="Dinamo"></img>
                    </div>
                    <div className="osijekContainer clubContainer">
                        <img className="club" id="osijek" src="/images/clubs/osijek.png" alt="Osijek"></img>
                    </div>
                    <div className="rijekaContainer clubContainer">
                        <img className="club" id="rijeka" src="/images/clubs/rijeka.png" alt="Rijeka"></img>
                    </div>
                    <div className="varazdinContainer clubContainer">
                        <img className="club" id="varazdin" src="/images/clubs/varazdin.png" alt="Varaždin"></img>
                    </div>
                    <div className="lokomotivaContainer clubContainer">    
                        <img className="club" id="lokomotiva" src="/images/clubs/lokomotiva.png" alt="Lokomotiva"></img>
                    </div>
                    <div className="istraContainer clubContainer">
                        <img className="club" id="istra" src="/images/clubs/istra.png" alt="Istra 1961"></img>
                    </div>
                    <div className="slavenContainer clubContainer">
                        <img className="club" id="slaven" src="/images/clubs/slaven.png" alt="Slaven Belupo"></img>
                    </div>
                    <div className="sibenikContainer clubContainer">
                        <img className="club" id="sibenik" src="/images/clubs/sibenik.png" alt="Šibenik"></img>
                    </div>
                    <div className="goricaContainer clubContainer">
                        <img className="club" id="gorica" src="/images/clubs/gorica.png" alt="Gorica"></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ClubsMenu;