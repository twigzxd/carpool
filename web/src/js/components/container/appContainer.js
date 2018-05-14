import React, { Component } from "react";
import ReactDOM from "react-dom";

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "Testing"
        };
    }
    render() {
        return (
            <div>
                Hello World.
            </div>
        );
    }
}
export default AppContainer;

const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;