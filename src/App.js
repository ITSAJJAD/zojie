import React from "react";
// Components
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
// Styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <Intro />
      <Cards />
    </React.Fragment>
  );
}

// Styles

export default App;
