
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main'>
      <Nav />
      <Home />
      <Skills />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
