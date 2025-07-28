import React from 'react';
import { Users, Target, Heart, TrendingUp, BookOpen, Shield } from 'lucide-react';

interface AboutUsProps {
  isDark: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isDark }) => {
  const values = [
    {
      icon: BookOpen,
      title: 'Simple Learning',
      description: 'We break down complex financial concepts into easy-to-understand lessons with helpful visuals.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Recommendations',
      description: 'Our AI analyzes your financial profile to suggest the most suitable long-term investment opportunities.'
    },
    {
      icon: Shield,
      title: 'Trusted Guidance',
      description: 'We provide reliable, data-driven insights to help you make confident investment decisions.'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Abstract Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-blue-600' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse`}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 ${isDark ? 'bg-purple-600' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-20 left-1/2 w-80 h-80 ${isDark ? 'bg-blue-800' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About{' '}
            <span className="text-blue-600">InvestWise</span>
          </h1>
          <div className={`max-w-4xl mx-auto text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="mb-6">
              InvestWise is a simple and smart web app designed to help you understand and grow your money through stock market investments.
            </p>
            <p className="mb-6">
              We know that the share market can feel confusing or risky, especially if you're just starting out. 
              That's why we built InvestWise — to make investing easy, clear, and suitable for everyone.
            </p>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What We{' '}
              <span className="text-blue-600">Do</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                      : 'bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-xl'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isDark ? 'bg-blue-600 group-hover:bg-blue-500' : 'bg-blue-100 group-hover:bg-blue-600'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-blue-600 group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {value.title}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className={`mt-12 text-center text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>
              Whether you're a student, working professional, or someone just curious about investing, 
              InvestWise is here to guide you step by step.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className={`rounded-3xl p-12 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-600' : 'bg-blue-600'}`}>
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Our{' '}
              <span className="text-blue-600">Mission</span>
            </h2>
            
            <div className={`max-w-3xl mx-auto text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-6">
                We believe that everyone should have the chance to build wealth and secure their future.
              </p>
              <p className="mb-6">
                Our goal is to make stock market investing easy, safe, and understandable — no fancy terms or pressure.
              </p>
              <p className={`text-2xl font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Let's grow smart, together.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Happy Investors</div>
          </div>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl font-bold text-blue-600 mb-2">₹100Cr+</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Investments</div>
          </div>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;