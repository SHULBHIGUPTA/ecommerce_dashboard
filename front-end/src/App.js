import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateComponents from './components/PrivateComponents';
import Login from './components/Login';
import AddProduct from './components/AddProducts';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route element={<PrivateComponents/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update/:id" element={<UpdateProduct/>}/>
      <Route path='/logout' element={<h1>logout component</h1>}/>
      <Route path="/profile" element={<h1>profile component</h1>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
