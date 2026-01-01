import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
// Temporarily disabled for future use
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Temporarily disabled routes - uncomment for future use */}
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
