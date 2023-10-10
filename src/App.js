import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Stake from "./components/Stake";
import Integrated from "./components/Integrated";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Stake" element={<Stake />} />
        <Route path="/Integrate" element={<Integrated />} />
        <Route path="/History" element={<History />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
