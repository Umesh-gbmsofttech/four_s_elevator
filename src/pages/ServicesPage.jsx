import React from 'react';
import { Wrench, Shield, Clock, Headphones } from 'lucide-react';

const serviceItems = [
  { icon: <Wrench />, title: "Installation", desc: "Expert setup with precision engineering." },
  { icon: <Shield />, title: "Maintenance", desc: "Regular checkups to ensure 100% safety." },
  { icon: <Clock />, title: "24/7 Support", desc: "Emergency breakdown assistance anytime." },
  { icon: <Headphones />, title: "Consultancy", desc: "Free site visits and planning." }
];

const ServicesPage = () => (
  <div className="pt-32 pb-20 min-h-screen bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Maintenance & Support</h1>
        <p className="text-gray-400 mt-4">We don't just sell elevators; we build lifetime relationships.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {serviceItems.map((item, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-yellow-500 hover:text-black transition-all group">
            <div className="mb-6 text-yellow-500 group-hover:text-black">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
            <p className="text-sm opacity-70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesPage;