import './App.css';
import { Ad } from './components/Ad.js';
import { Content } from './components/Content';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <Content/>
        <Ad/>
      </div>
    </>
  );
}

export default App;
