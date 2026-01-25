import React, { useState } from 'react';
import { ArrowRight, Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data';

const Home = ({ addToCart }) => {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const colors = { primary: '#ff4e00', dark: '#1a1a1a' };

  // Filter only hot/featured products for the home page
  const featuredProducts = allProducts.filter(p => p.badge || p.oldPrice);

  return (
    <>
      {/* Hero Section */}
      <section id="new" className="relative pt-32 pb-12 lg:pt-40 lg:pb-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <span className="font-bold uppercase tracking-widest text-sm mb-2 block animate-pulse" style={{ color: colors.primary }}>New Collection 2026</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6" style={{ color: colors.dark }}>
              Run The <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Streets.</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">Engineered for comfort, designed for speed.</p>
            <div className="flex gap-4">
              <Link to="/category/running" className="text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-1 hover:scale-105" style={{ backgroundColor: colors.dark }}>Shop Men</Link>
              <Link to="/category/running" className="bg-white border border-gray-300 px-8 py-4 rounded-full font-bold transition transform hover:-translate-y-1 hover:scale-105" style={{ color: colors.dark, borderColor: 'gray' }}>Shop Women</Link>
            </div>
          </div>
          <div className="relative" data-aos="zoom-in" data-aos-delay="200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" 
              alt="Hero" 
              onClick={() => setIsHorizontal(!isHorizontal)}
              className={`w-full h-auto drop-shadow-2xl transition-all duration-700 cursor-pointer ${isHorizontal ? 'rotate-0 scale-105' : '-rotate-12 animate-float'}`}
            />
          </div>
        </div>
      </section>

      {/* Categories Links - NOW CLICKABLE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.dark }}>Browse by Category</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Running', type: 'running', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600' },
              { title: 'Sneakers', type: 'sneakers', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600' },
              { title: 'Performance', type: 'performance', img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=600' }
            ].map((cat, idx) => (
              <Link to={`/category/${cat.type}`} key={idx} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg block">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                <div className="absolute bottom-6 left-6 transform group-hover:-translate-y-2 transition duration-300">
                  <h3 className="text-white text-2xl font-bold mb-2">{cat.title}</h3>
                  <span className="text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: colors.primary }}>Explore <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: colors.dark }}>Hot Selling Items</h2>
              <p className="text-gray-500 text-sm">Most popular picks this week</p>
            </div>
            <Link to="/category/all" className="font-bold border-b-2 transition pb-1 flex items-center gap-1 hover:text-orange-500" style={{ borderColor: colors.primary, color: colors.dark }}>View All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition duration-300 group relative">
                {product.badge && (
                  <div className={`absolute top-4 left-4 text-white text-[10px] font-bold px-2 py-1 rounded uppercase ${product.badgeColor || 'bg-black'}`}>{product.badge}</div>
                )}
                <div className="h-56 bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <button onClick={() => addToCart(product)} className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 text-white font-bold px-6 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm flex items-center gap-1 hover:bg-orange-600" style={{ backgroundColor: colors.dark }}><ShoppingCart size={16} /> Add</button>
                </div>
                <div className="mt-4 px-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="text-lg font-bold group-hover:text-orange-500 transition" style={{ color: colors.dark }}>{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg" style={{ color: product.oldPrice ? colors.primary : colors.dark }}>${product.price}</span>
                    <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;