import './App.css';

import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import Catalogue from "./pages/Catalogue"
import Monthlysub from "./pages/Monthlysub";
import Bonusprogram from "./pages/Bonusprogram";
import About from "./pages/About";
import Nopage from "./pages/Nopage"
function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/monthlysub" element={<Monthlysub />} />
          <Route path="/bonusprogram" element={<Bonusprogram />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
  );
}
export default App;
