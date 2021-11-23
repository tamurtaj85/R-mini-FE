import React, { Component } from "react";
import ReactRouterSetup from "../pages/index";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ReactRouterSetup />
      </div>
    );
  }
}

export default App;
