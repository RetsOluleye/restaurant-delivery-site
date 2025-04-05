import { Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Dishes from "./pages/Dishes";
import Track from "./pages/Track";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/order" element={<Track />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
