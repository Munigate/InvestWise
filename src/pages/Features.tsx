import React from 'react';
import { BookOpen, TrendingUp, BarChart3, Brain, FileText, Shield, Lightbulb } from 'lucide-react';

interface FeaturesProps {
  isDark: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isDark }) => {
  const features = [
    {
      icon: BookOpen,
      emoji: '🌱',
      title: 'Learn the Equity Market (Step-by-Step)',
      description: 'Understand how the Equity market works through simple lessons, visuals, and real-life examples. No jargon, just plain English.'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Personalized Suggestions',
      description: 'We analyze your income, expenses, and financial goals to recommend stocks that suit your long-term plans. It\'s like having your own financial guide.'
    },
    {
      icon: BarChart3,
      emoji: '🔍',
      title: 'Easy-to-Use Dashboard',
      description: 'Track your suggested stocks, learning progress, and more — all from a clean, simple dashboard made for beginners.'
    },
    {
      icon: Brain,
      emoji: '🤖',
      title: 'Smart Investment Insights',
      description: 'Our intelligent system gives you tips on when and what to invest in — based on data, not guesses.'
    },
    {
      icon: FileText,
      emoji: '📚',
      title: 'Beginner-Friendly Resources',
      description: 'Get access to bite-sized articles, FAQs, and tutorials that help you become a confident investor at your own pace.'
    },
    {
      icon: Shield,
      emoji: '🔒',
      title: 'Safe and Secure',
      description: 'Your personal data and financial info stay protected. We take privacy and security seriously.'
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
            Powerful{' '}
            <span className="text-blue-600">Features</span>
          </h1>
          <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            InvestWise is more than just a stock suggestion tool — it's your all-in-one guide to smart investing. 
            Here's what you'll find when you use our app:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-4 transition-colors duration-300 ${
                    isDark ? 'bg-blue-600 group-hover:bg-blue-500' : 'bg-blue-100 group-hover:bg-blue-600'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-blue-600 group-hover:text-white'
                    }`} />
                  </div>
                  <div className="text-3xl">{feature.emoji}</div>
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`rounded-3xl p-12 text-center ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-blue-100'}`}>
          <div className="flex justify-center mb-8">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-600' : 'bg-blue-600'}`}>
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Ready to Start{' '}
            <span className="text-blue-600">Investing?</span>
          </h2>
          
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            💡 Whether you're just getting started or want to invest smarter — InvestWise 
            gives you the tools and confidence to grow your wealth over time.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Start Your Journey Today
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl mb-4">🎯</div>
            <div className="text-2xl font-bold text-blue-600 mb-2">Personalized</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Tailored to your goals</div>
          </div>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl mb-4">🚀</div>
            <div className="text-2xl font-bold text-blue-600 mb-2">Simple</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Easy to understand</div>
          </div>
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <div className="text-4xl mb-4">🔐</div>
            <div className="text-2xl font-bold text-blue-600 mb-2">Secure</div>
            <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Your data is protected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;