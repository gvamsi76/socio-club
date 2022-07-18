import './App.css';
import {Navbar,Footer} from './components'
import {Home} from './pages'
import Privacypolicy from './pages/privacy-policy/Privacy_policy';
import TermsConditions from './pages/terms-conditions/Terms_conditions';
import Contactus from './pages/contactus/Contactus';
import About from './pages/about/About';
import { Routes, Route } from "react-router-dom";
// import "./trueno-cufonfonts-webfont/TruenoBd.woff"

function App() {
  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/termsConditions" element={<TermsConditions />} />
            <Route path="/About" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
