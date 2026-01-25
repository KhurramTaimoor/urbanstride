import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // IMPORT THIS

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
  const navigate = useNavigate(); // INITIALIZE HOOK
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const colors = { primary: '#ff4e00', dark: '#1a1a1a' };

  // NEW FUNCTION
  const handleCheckout = () => {
    onClose(); // Close drawer
    navigate('/checkout'); // Go to page
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.5 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[60]"
          />
          
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag size={20} /> Your Cart ({cartItems.length})
              </h2>
              <button onClick={onClose} className="hover:text-red-500 transition"><X /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-400 mt-20">
                  <p>Your cart is empty.</p>
                  <button onClick={onClose} className="mt-4 text-orange-500 font-bold hover:underline">Start Shopping</button>
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center animate-pulse-once">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-xs uppercase">{item.category}</p>
                      <p className="font-bold mt-1" style={{ color: colors.primary }}>${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => onRemove(index)} className="text-gray-400 hover:text-red-500 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4 text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              {/* UPDATED BUTTON */}
              <button 
                onClick={handleCheckout} 
                disabled={cartItems.length === 0}
                className="w-full text-white py-4 rounded-full font-bold shadow-lg transform active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{ backgroundColor: colors.dark }}
              >
                Checkout Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;