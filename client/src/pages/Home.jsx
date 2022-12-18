import React, { Component } from "react";
import './Home.css'

class HomeScreen extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <img src="/images/supersport.png" alt="Supersport" width="500" height="auto"></img>
                <h1 class="title">HNL Fantasy</h1>
            </div>
        );
    }
}
 
export default HomeScreen;