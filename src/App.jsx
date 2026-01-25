import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage'; // IMPORT THIS

const UrbanStride = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimatingCart, setIsAnimatingCart] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsAnimatingCart(true);
    setIsCartOpen(true); 
    setTimeout(() => setIsAnimatingCart(false), 300);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Function to clear cart after purchase
  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px) rotate(-12deg); }
            50% { transform: translateY(-20px) rotate(-12deg); }
            100% { transform: translateY(0px) rotate(-12deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>

        <Navbar 
          cartCount={cart.length} 
          isScrolled={isScrolled} 
          isAnimatingCart={isAnimatingCart} 
          onCartClick={() => setIsCartOpen(true)}
        />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cart} 
          onRemove={removeFromCart} 
        />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/category/:type" element={<CategoryPage addToCart={addToCart} />} />
          
          {/* NEW ROUTE */}
          <Route path="/checkout" element={<CheckoutPage cart={cart} clearCart={clearCart} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default UrbanStride;