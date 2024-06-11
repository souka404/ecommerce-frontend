import './App.css';
import Home from './components/pages/home/Home';
import Nav from './components/layouts/navbar/Nav';
import { Routes, Route } from 'react-router-dom';
import Products from './components/pages/products/Products';
import Product from './components/pages/product/Product';
import Cart from './components/pages/cart/Cart';

import SearchPage from './components/pages/search/SearchPage';
import Contact from "./components/pages/contact/contact"
import About from "./components/pages/about/About";
import Login from './components/pages/Auth/login/Login';
import Register from './components/pages/Auth/register/Register';
import ProtectedRoute from './components/ProtectedRoute';

// import Notfound from './components/Notfound';
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:searchText" element={<SearchPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;