import React from 'react';
import { BookOpen, Target, TrendingUp, User } from 'lucide-react';

interface BenefitsProps {
  isDark: boolean;
}

const Benefits: React.FC<BenefitsProps> = ({ isDark }) => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Simple Learning',
      description: 'Visual and easy-to-understand lessons on equity markets.'
    },
    {
      icon: Target,
      title: 'Personalized Suggestions',
      description: 'Stock picks based on your income, spending, and risk appetite.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Focus',
      description: 'Designed for building sustainable wealth.'
    },
    {
      icon: User,
      title: 'User-Friendly Interface',
      description: 'No finance jargon, only actionable insights.'
    }
  ];

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Choose{' '}
            <span className="text-blue-600">InvestWise?</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Experience the future of equity investing with our comprehensive platform designed for every investor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' 
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
                  {benefit.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;