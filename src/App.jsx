import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/privacyPolicy";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home"
import Login from "./components/Login"
import Contribute from "./components/Contribute";


function App() {
  return (
    <Router>
      <div className="min-h-screen  flex flex-col bg-gray-800">
        <Navbar />
        <div className="flex-grow">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;