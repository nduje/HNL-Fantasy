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
                            <label>NAPADAC</label>
                            <label>NAPADAC</label>
                            <label>NAPADAC</label>
                        </div>
                        <div className="midfieldersBox playersBox">
                            <label>VEZNI</label>
                            <label>VEZNI</label>
                            <label>VEZNI</label>
                            <label>VEZNI</label>
                        </div>
                        <div className="defendersBox playersBox">
                            <label>OBRANA</label>
                            <label>OBRANA</label>
                            <label>OBRANA</label>
                            <label>OBRANA</label>
                        </div>
                        <div className="goalkeeperBox playersBox">
                            <label>GOLMAN</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Field;