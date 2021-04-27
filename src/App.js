import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}
