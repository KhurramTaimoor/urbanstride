import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ cart, clearCart }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = total * 0.1;
  const shipping = 15;
  const finalTotal = total + tax + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  const colors = { primary: '#ff4e00', dark: '#1a1a1a' };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
          <p className="text-gray-500 mb-8">Thank you for your purchase. Your sneakers are on the way.</p>
          <Link to="/" className="block w-full text-white font-bold py-3 rounded-xl transition" style={{ backgroundColor: colors.primary }}>
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pt-28 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition mb-6">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        
        <h1 className="text-4xl font-bold mb-8" style={{ color: colors.dark }}>Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">1</span>
              Shipping Information
            </h2>
            <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
                <input required type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              <input required type="text" placeholder="Street Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              <div className="grid grid-cols-3 gap-4">
                <input required type="text" placeholder="City" className="col-span-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
                <input required type="text" placeholder="State" className="col-span-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
                <input required type="text" placeholder="Zip" className="col-span-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              </div>

              <h2 className="text-xl font-bold mt-8 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
                Payment Method
              </h2>
              <div className="p-4 border border-orange-500 bg-orange-50 rounded-lg flex items-center gap-4 cursor-pointer">
                <CreditCard className="text-orange-600" />
                <span className="font-bold text-gray-800">Credit Card</span>
                <span className="ml-auto w-4 h-4 rounded-full border-4 border-orange-500"></span>
              </div>
              <input required type="text" placeholder="Card Number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="MM / YY" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
                <input required type="text" placeholder="CVC" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500" />
              </div>
            </form>
          </div>

          {/* Right: Summary */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-32">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.length === 0 ? (
                    <p className="text-gray-400">Cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                        <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                        <p className="text-gray-500 text-xs">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    ))
                )}
              </div>
              
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Taxes</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t mt-2">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                form="checkout-form"
                type="submit"
                disabled={cart.length === 0}
                className="w-full mt-6 text-white py-4 rounded-xl font-bold shadow-lg transform active:scale-95 transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: colors.primary }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;