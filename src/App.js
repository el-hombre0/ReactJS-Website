import './App.css';

import Content from './components/Content/Content';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import Catalogue from "./routes/Catalogue"
import Monthlysub from "./routes/Monthlysub";
import Bonusprogram from "./routes/Bonusprogram";
import Support from "./routes/Support/Support"
import About from "./routes/About";
import Nopage from "./routes/Nopage"
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function App() {
  return (
      <div className="App">
        <Header user_number={getRandomInt(200, 300)}/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/monthlysub" element={<Monthlysub />} />
          <Route path="/bonusprogram" element={<Bonusprogram />} />
          <Route path='/support' element={<Support/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </div>
  );
}
export default App;
