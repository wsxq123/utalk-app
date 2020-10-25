import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import DemoVideo from "./components/DemoVideo/DemoVideo";
import "./App.css";
import "./assets/scss/components/_Nav.scss";
import "./assets/scss/components/_Banner.scss";
import "./assets/scss/components/_DemoVideo.scss";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <DemoVideo />
    </>
  );
}

export default App;
