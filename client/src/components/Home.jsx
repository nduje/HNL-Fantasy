import React, { Component } from "react";

class HomeScreen extends Component {
    state = {  } 
    render() { 
        return (
            <div class="logo">
                <img src="/images/supersport.png" alt="Supersport" width="500" height="auto"></img>
                <h1 className="title">HNL Fantasy</h1>
            </div>
        );
    }
}
 
export default HomeScreen;