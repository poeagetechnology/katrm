import './index.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Commponent/Header';
import Footer from './Commponent/Footer';
import Home from './Commponent/Home';
import Contact from './Commponent/Contact';


function App() {
  return (
    <div className="App">
      <main>      
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
