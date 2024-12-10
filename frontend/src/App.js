
import Navbar from './Components/Common/Navbar';
import Registraion from './Components/registrationForm';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navigation'>
      <Navbar/>
      </div>
      <div className='content'>
      <Registraion/>
      </div>
    </div>
  );
}

export default App;
