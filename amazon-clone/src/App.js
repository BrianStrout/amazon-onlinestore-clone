import { Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
