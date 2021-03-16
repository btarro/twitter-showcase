import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;

// Wireframes:  https://wireframe.cc/wXMoPU
// https://wireframe.cc/qXHDqq
