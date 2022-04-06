import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
