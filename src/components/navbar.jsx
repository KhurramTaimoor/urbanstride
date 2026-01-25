import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Footprints } from 'lucide-react';

const Navbar = ({ cartCount, isScrolled, isAnimatingCart, onCartClick }) => {
  const colors = {
    primary: '#ff4e00',
    dark: '#1a1a1a',
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Now links back to Home */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer" data-aos="fade-down">
            <Footprints size={32} color={colors.primary} />
            <span className="font-bold text-2xl tracking-tighter" style={{ color: colors.dark }}>
              Urban<span style={{ color: colors.primary }}>Stride</span>.
            </span>
          </Link>

          {/* Desktop Menu - Updated links to work from other pages */}
          <div className="hidden md:flex space-x-8 font-medium" data-aos="fade-down" data-aos-delay="100">
            <a href="/#new" className="hover:text-orange-500 transition">New Arrivals</a>
            <a href="/#featured" className="hover:text-orange-500 transition">Featured</a>
            <a href="/#brands" className="hover:text-orange-500 transition">Brands</a>
            <a href="/#sale" className="text-red-500 font-bold hover:text-red-600 transition">Sale</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6" data-aos="fade-down" data-aos-delay="200">
            <button className="hover:text-orange-500 transition"><Search size={20} /></button>
            <button className="hover:text-orange-500 transition"><Heart size={20} /></button>
            
            {/* Cart Button - Now triggers the Drawer */}
            <button 
              onClick={onCartClick} 
              className="relative hover:text-orange-500 transition group"
            >
              <ShoppingBag size={20} />
              <span className={`absolute -top-2 -right-2 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold transition-transform ${isAnimatingCart ? 'animate-ping' : ''}`} style={{ backgroundColor: colors.primary }}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;