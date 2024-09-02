import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Asegúrate de que la ruta sea correcta
import Footer from './components/Footer';  // Asegúrate de que la ruta sea correcta
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizzas';
import Profile from './pages/Profile';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import NotFound from './pages/NotFound';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />  {/* Asegúrate de que esté dentro del Router y antes de Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />  {/* Asegúrate de que esté dentro del Router y después de Routes */}
    </div>
  </Router>
);

export default App;
