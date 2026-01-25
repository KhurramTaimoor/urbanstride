import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, ShoppingCart } from 'lucide-react';
import { allProducts } from '../data';

const CategoryPage = ({ addToCart }) => {
  const { type } = useParams(); // Gets 'running', 'sneakers', etc. from URL
  
  // Filter products based on the URL category
  // If 'all', show everything. Otherwise match category.
  const products = type === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category.toLowerCase() === type.toLowerCase());

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const colors = { primary: '#ff4e00', dark: '#1a1a1a' };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition mb-4">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold capitalize" style={{ color: colors.dark }}>{type} Collection</h1>
          <p className="text-gray-500 mt-2">Found {products.length} premium items</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
             <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
             <p className="text-gray-400">We are stocking up this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition duration-300 group relative">
                 <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 z-10 transition"><Heart size={20} /></button>
                 
                 <div className="h-56 bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <button 
                      onClick={() => addToCart(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 text-white font-bold px-6 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-sm flex items-center gap-1 hover:bg-orange-600"
                      style={{ backgroundColor: colors.dark }}
                    >
                      <ShoppingCart size={16} /> Add
                    </button>
                 </div>

                 <div className="mt-4 px-1">
                   <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                   <h3 className="text-lg font-bold group-hover:text-orange-500 transition">{product.name}</h3>
                   <div className="flex items-center justify-between mt-2">
                     <span className="font-bold text-lg" style={{ color: product.oldPrice ? colors.primary : colors.dark }}>${product.price}</span>
                     <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryPage;