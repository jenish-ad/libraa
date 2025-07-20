import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/privacyPolicy";
import About from "./components/About";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-800">
        <Navbar />
        <Switch>
          <Routes>
            <Route path="/about" element={<About />} />
         </Routes>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              <Routes>
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
            </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
