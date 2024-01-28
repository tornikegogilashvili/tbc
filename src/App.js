import './App.css';
import { NavBar } from './navBar/navBar';
import { Home } from './home/home';
import { Card } from './card/Card';

function App() {
  return (
    <div className='mtavari'>
      <NavBar />
      <Home />
      <Card />
    </div>
  );
}

export default App;
