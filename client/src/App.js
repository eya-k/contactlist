
import './App.css';
import NavContact from './component/NavContact';
import Add from './component/Add';
import ListContact from './component/ListContact';
import Update from './component/Update';
import Home from './component/Home';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavContact/>
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/contacts' element={ <ListContact/>}/>
        <Route path='/addContact' element={  <Add/>}/>
        <Route path='/update/:id' element={  <Update/>}/>
      </Routes>
    
  
    
    

    
    </div>
  );
}

export default App;
