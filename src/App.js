import './App.css';
import Mensaje from './Mensaje.js'


function App() {
  return (
    
    <div className="App">
      <Mensaje size='24px' color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
    </div>
  );
}

export default App;
