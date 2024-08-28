import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import BrandProducts from './components/BrandProducts';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/new-arrivals' element={<Products category="new-arrivals" />} />
        <Route path='/shoes' element={<Products category="shoes" />} />
        <Route path='/women' element={<Products category="women" />} />
        <Route path='/men' element={<Products category="men" />} />
        <Route path='/kids' element={<Products category="kids" />} />
        <Route path='/accessories' element={<Products category="accessories" />} />
        <Route path='/brands' element={<Products category="brands" />} />
        <Route path='/deals' element={<Products category="deals" />} />
        <Route path='/brands/:brandName' element={<BrandProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
