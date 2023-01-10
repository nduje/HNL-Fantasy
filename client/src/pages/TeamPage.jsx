import React, { Component } from "react";
import Field from "../components/Field.jsx";
import SearchBar from "../components/SearchBar.jsx";
import "../styles/Teams.css"

class TeamPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="teamPage">
                <Field />
                <SearchBar />
            </div>
        );
    }
}
 
export default TeamPage;