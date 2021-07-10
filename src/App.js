import Header from './Header.js'
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';
import './App.css';

function App() {
  return (
    //BEM class Naming convention
    <div className="app">
      
      <Header/>
     
      <TinderCards/>
      
      <SwipeButtons/>
      
    </div>
  );
}

export default App;
