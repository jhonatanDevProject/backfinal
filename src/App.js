import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuIzquierdo from './componentes/MenuIzquierdo';
import AsignacionComite from './componentes/AsignacionComite';

function App() {
  return (
    <div className="App"> 
    <Router>
          <MenuIzquierdo/>
          <Routes>
             <Route path='/ComiteElectoral' element={<AsignacionComite/>}/>  
          </Routes>  
      </Router>
      
    </div>
  );
}

export default App;
