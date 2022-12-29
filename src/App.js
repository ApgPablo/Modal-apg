
import './App.css';
import {openmodal, openmodalAccount }from './openmodal';

function App() {
  function handleOpenModal(){
    openmodal();
  }
  function handleOpenModal2(){
    openmodalAccount();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <button onClick={handleOpenModal2}>Abrir Modal</button>
    </div>
  );
}

export default App;
