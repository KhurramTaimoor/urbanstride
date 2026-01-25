import React from 'react';
import { Footprints, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const colors = {
    primary: '#ff4e00',
    dark: '#1a1a1a',
  };

  return (
    <footer className="text-white py-16" style={{ backgroundColor: colors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-6">
            <Footprints size={32} color={colors.primary} />
            <span className="font-bold text-2xl">Urban<span style={{ color: colors.primary }}>Stride</span>.</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">Premium footwear designed for the modern urban lifestyle. Run faster, walk cleaner.</p>
          <div className="flex space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-600 transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        {[
          { title: 'Shop', links: ['New Arrivals', "Men's Shoes", "Women's Shoes", 'Sale'] },
          { title: 'Support', links: ['Track Order', 'Returns & Exchanges', 'Size Guide', 'Help Center'] }
        ].map((col, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
            <h4 className="font-bold mb-6 text-lg">{col.title}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {col.links.map((link, i) => (
                <li key={i}><a href="#" className="hover:text-orange-500 transition">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-bold mb-6 text-lg">Stay in the Loop</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe for latest drops and exclusive offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="bg-white/10 border border-white/10 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-orange-500 transition placeholder-gray-500" />
            <button className="px-5 py-3 rounded-r-lg hover:bg-orange-600 transition" style={{ backgroundColor: colors.primary }}>
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        &copy; 2026 UrbanStride. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;