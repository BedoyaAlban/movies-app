import "bulma/css/bulma.css";
import React from "react";
import "./App.css";
import Movies from "./component/Movies";

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <Movies />
      </div>
    </section>
  );
};

export default App;
