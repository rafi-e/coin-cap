import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import "../src/dist/styles.css";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
