import './App.css';
import './Header.css';

import Content from './components/Content';
import Header from './components/Header'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>

  );
}

export default App;
