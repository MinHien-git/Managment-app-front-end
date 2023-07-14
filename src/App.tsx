import React from "react";
import Footer from "./components/footer/Footer";
import Button from "./components/button/button";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Main>
        <NavBar />
        <h1>Hello world</h1>
      </Main>
      <Footer />
    </>
  );
}

export default App;
