import React, { Component } from "react";   
import Axios from 'axios'
import '../styles/Clubs.css'
import { Link } from 'react-router-dom';
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
                        <Link to="/teamPage"><img className="club" id="hajduk" src="/images/clubs/hajduk.png" alt="Hajduk"></img></Link>
                    </div>
                    <div className="dinamoContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="dinamo" src="/images/clubs/dinamo.png" alt="Dinamo"></img></Link>
                    </div>
                    <div className="osijekContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="osijek" src="/images/clubs/osijek.png" alt="Osijek"></img></Link>
                    </div>
                    <div className="rijekaContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="rijeka" src="/images/clubs/rijeka.png" alt="Rijeka"></img></Link>
                    </div>
                    <div className="varazdinContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="varazdin" src="/images/clubs/varazdin.png" alt="Varaždin"></img></Link>
                    </div>
                    <div className="lokomotivaContainer clubContainer">    
                        <Link to="/teamPage"><img className="club" id="lokomotiva" src="/images/clubs/lokomotiva.png" alt="Lokomotiva"></img></Link>
                    </div>
                    <div className="istraContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="istra" src="/images/clubs/istra.png" alt="Istra 1961"></img></Link>
                    </div>
                    <div className="slavenContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="slaven" src="/images/clubs/slaven.png" alt="Slaven Belupo"></img></Link>
                    </div>
                    <div className="sibenikContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="sibenik" src="/images/clubs/sibenik.png" alt="Šibenik"></img></Link>
                    </div>
                    <div className="goricaContainer clubContainer">
                        <Link to="/teamPage"><img className="club" id="gorica" src="/images/clubs/gorica.png" alt="Gorica"></img></Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ClubsMenu;