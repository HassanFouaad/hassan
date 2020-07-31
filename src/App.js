import React from "react";
import Main from "./components/Main";
import "./App.css";

import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Main></Main>
    </HashRouter>
  );
}

export default App;
