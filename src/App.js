import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListC from "./Components/ItemListContainer/ItemListC.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ItemListC texto="Hola!" />
    </React.Fragment>
  );
}

export default App;
