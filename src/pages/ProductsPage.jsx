import React from 'react';

const productList = [
  { name: "Home Lifts", img: "https://aaronelevators.in/wp-content/uploads/2022/03/64c3cb3111051e0001d86311.png" },
  { name: "Passenger Lifts", img: "https://aaronelevators.in/wp-content/uploads/2023/09/steptodown.com698461-1.jpg" },
  { name: "Capsule Lifts", img: "https://aaronelevators.in/wp-content/uploads/2023/09/steptodown.com809687-1.jpg" }
];

const ProductsPage = () => (
  <div className="pt-32 pb-20 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-black mb-12 border-l-8 border-yellow-500 pl-6 uppercase">Our Product Range</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {productList.map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl h-[400px] mb-4">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProductsPage;