import React from "react";
import RouterFunction from "./Router";
import Footer from "./Footer";
import Nav from "./Nav";
import "../App.css";

function App() {
  return (
    <div className={"container"}>
      <Nav />
      <RouterFunction />
      <Footer />
    </div>
  );
}

export default App;
