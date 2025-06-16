import Header from './components/Header';
import Hero from './components/Hero';
import Path from './components/Path';
import Services from './components/Services';
import About from './components/About';
import History from './components/History';
import Offices from './components/Offices';
import Contact from './components/Contact';
import Downloads from './components/Downloads';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Information from './components/Information';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/informacion" element={<Information />} />
          <Route path='/servicios' element={<Services/>}></Route>
          <Route path='/trayectoria' element={<Path/>}></Route>
          <Route
            path="/"
            element={
              <>
                <section id="inicio">
                  <Hero   />
                </section>
                <section id="quiénes-somos">
                  <About />
                </section>
                <section id="historia">
                  <History />
                </section>
                <section id="oficinas">
                  <Offices/>
                </section>
                <section id="contacto">
                  <Contact />
                </section>
                <section id="descargas">
                  <Downloads />
                </section>
              </>
              
            }
          />
        </Routes>
        <WhatsAppButton />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;