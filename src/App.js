import './App.css';
import Navbar from './Components/Navbar/navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSIgnUp from './Pages/LoginSIgnUp';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category='mens'/>}></Route>
        <Route path='/women' element={<ShopCategory category='women'/>}></Route>
        <Route path='/kids' element={<ShopCategory category='kids' />}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='login' element={<LoginSIgnUp/>} />
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
