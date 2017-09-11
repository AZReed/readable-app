import React, { Component } from "react";
import Home from "./Home";
import * as ReadableAPI from "../utils/ReadableAPI";

class App extends Component {
  render() {
    ReadableAPI.getCategories()
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
