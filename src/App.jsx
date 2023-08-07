// import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import GetProduct from './Components/GetProduct/GetProduct';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/Post-Classifieds' element={<AddProduct />}></Route>
        <Route path='/Browse-Classifieds' element={<GetProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
