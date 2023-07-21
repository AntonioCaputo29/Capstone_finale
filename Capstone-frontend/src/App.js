
import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Spiaggia from './components/Spiaggia';
import Ristorante from './components/Ristorante';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from './components/Bar';
import Animazione from './components/Animazione';
import Discopub from './components/Discopub';
import Prenotazione from './components/Prenotazione';
import WeatherApp from './components/MyMeteo';
import Homepage from './components/Homepage';
import Video from './components/Video';


function App() {
  return (
    <Router>
      <div className="sfondo">
      <Navigation />
        <Video/>
        <Routes >
          <Route path="/" element={<>
            <Homepage />
            <WeatherApp />
          </>} />
          <Route path="/Spiaggia" element={<Spiaggia />} />
          <Route path="/Ristorante" element={<Ristorante />} />
          <Route path="/Bar" element={<Bar />} />
          <Route path="/Animazione" element={<Animazione />} />
          <Route path="/Discopub" element={<Discopub />} />
          <Route path="/Prenotazione" element={<Prenotazione />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

