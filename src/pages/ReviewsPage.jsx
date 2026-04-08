import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, MessageSquare, thumbsUp, Filter } from 'lucide-react';

const reviewStats = {
  average: 4.9,
  total: 315,
  distribution: [
    { stars: 5, count: 290 },
    { stars: 4, count: 20 },
    { stars: 3, count: 5 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ]
};

const reviews = [
  {
    id: 1,
    author: "Abraham Paulson",
    date: "January 20, 2025",
    content: "As a teacher, safety and affordability were my top priorities. Recently, we installed an Aaron elevator in our home, which has been a great decision.",
    rating: 5,
    source: "Google"
  },
  {
    id: 2,
    author: "Nature Amaze",
    date: "January 20, 2025",
    content: "I find the stylish design of the Aaron elevator to be one of its standout features. I recommend it to anyone looking for a modern look.",
    rating: 5,
    source: "Trustindex"
  },
  {
    id: 3,
    author: "Game Mania",
    date: "January 15, 2025",
    content: "For years, we’ve lived in a flat with an Aaron glass elevator, and its main appeal lies in its luxurious appearance, which enhances the aesthetics.",
    rating: 5,
    source: "Google"
  },
  {
    id: 4,
    author: "Meenakshi M Kumar",
    date: "January 15, 2025",
    content: "Aaron Elevators not only offer customized solutions but also provide them at affordable prices. Excellent choice for personalized needs.",
    rating: 5,
    source: "Google"
  }
];

const ReviewsPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
          >
            CUSTOMER REVIEWS
          </motion.h1>

          {/* Ratings Dashboard */}
          <div className="grid md:grid-cols-3 gap-12 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
            {/* Big Score */}
            <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <span className="text-7xl font-black text-gray-900">{reviewStats.average}</span>
              <div className="flex text-yellow-500 my-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Based on {reviewStats.total} Reviews</p>
            </div>

            {/* Progress Bars */}
            <div className="flex flex-col gap-2 justify-center">
              {reviewStats.distribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-4">
                  <span className="text-xs font-bold w-4">{item.stars}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.count / reviewStats.total) * 100}%` }}
                      className="h-full bg-yellow-500"
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center justify-center text-center">
              <h4 className="font-black text-lg mb-4">WANT TO SHARE YOUR EXPERIENCE?</h4>
              <button className="bg-black text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-between items-center mb-10 border-b pb-6">
          <div className="flex items-center gap-2 font-black text-sm uppercase">
            <MessageSquare size={18} /> {reviewStats.total} Comments
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors">
            <Filter size={16} /> Filter by Recent
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((rev, index) => (
            <motion.div 
              key={rev.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 bg-white hover:border-yellow-200 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 uppercase tracking-tight">{rev.author}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded w-fit">
                      <CheckCircle size={10} /> VERIFIED PURCHASE
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{rev.date}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{rev.content}"
              </p>
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-4 text-xs font-bold text-gray-400">
                 via {rev.source}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;