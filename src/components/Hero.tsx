import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-blue-600' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 ${isDark ? 'bg-purple-600' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-20 left-1/2 w-80 h-80 ${isDark ? 'bg-blue-800' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000`}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Learn. Analyze.{' '}
            <span className="text-blue-600 relative">
              Invest Wise.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </span>
          </h1>
          <p className={`text-xl md:text-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Understand equity markets in simple language and receive smart stock suggestions based on your goals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Start for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500' : 'text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400'}`}>
            <PlayCircle className="w-6 h-6" />
            Watch Demo
          </button>
        </div>

        <div className={`mt-16 flex flex-wrap justify-center gap-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50K+</div>
            <div className="text-sm">Active Investors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹100Cr+</div>
            <div className="text-sm">Total Investments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">4.8★</div>
            <div className="text-sm">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;