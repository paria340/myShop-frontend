import MainNav from "./components/MainNav";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ShopOnline from "./components/ShopOnline";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <MainNav />
        </header>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/shopOnline" element={<ShopOnline />} />
          <Route path="/contact" element={<ShopOnline />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/:productID" element={<ProductPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
