import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <p className="text-gray-400 leading-relaxed">
            Redefining vertical transportation in Pune with safety and innovation for over 16 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#products" className="hover:text-yellow-500">Products</a></li>
            <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6">Elevator Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Home Elevators</li>
            <li>Passenger Elevators</li>
            <li>Capsule Elevators</li>
            <li>Maintenance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <p className="text-gray-400 mb-2">Pune</p>
          <p className="text-yellow-500 font-bold mb-2">+91 7592056788</p>
          <p className="text-gray-400 text-sm">info@fours.in</p>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026  Four S Elevators. Built with React by Mithun.</p>
      </div>
    </footer>
  );
};

export default Footer;