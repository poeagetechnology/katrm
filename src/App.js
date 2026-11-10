import './index.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Commponent/Header';
import Footer from './Commponent/Footer';
import Home from './Commponent/Home';
import Contact from './Commponent/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
