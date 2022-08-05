import './App.css';
import HomePage from './Pages/HomePage.jsx';
import NavBar from './Pages/NavBar';
import {Routes,Route} from 'react-router-dom' 
import OrderMedicines from './Pages/OrderMedicines';
import HealthCareProducts from './Components/HealthCare&Products';
import LabTest from './Pages/LabTest';
import Products from './Components/Products';
import Cart from './Components/Cart'



function App() {
  return (
    <div className="App">
    <NavBar />
   
   
    <div> 
   
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/medicens' element={<OrderMedicines />} />
        <Route path='/Health' element={<HealthCareProducts />} />
        <Route path='/Labtest' element={<LabTest />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
   </div>
    </div>
  );
}

export default App;
