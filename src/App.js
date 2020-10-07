import "bulma/css/bulma.css";
import React from "react";
import "./App.css";
import Movies from "./component/Movies";
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <NavBar />
        <Movies />
      </div>
    </section>
  );
};

export default App;
