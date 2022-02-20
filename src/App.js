import React from "react";
import Picture from "./Picture";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Picture />
        <Content />
        <Footer />
      </div> 
    </div>
  );
}

export default App;
