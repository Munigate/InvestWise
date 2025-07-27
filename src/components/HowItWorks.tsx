import React from 'react';
import { BookOpen, Brain, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  isDark: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ isDark }) => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Visual Learning',
      subtitle: 'Describe',
      description: 'Learn using images and bite-sized tips.',
      details: 'Start your journey with interactive visual lessons that break down complex financial concepts into digestible, easy-to-understand modules. Our platform uses infographics, charts, and real-world examples to make equity learning engaging and memorable.'
    },
    {
      icon: Brain,
      title: 'Smart Stock Picks',
      subtitle: 'Analyze',
      description: 'Get recommendations that match your financial activity.',
      details: 'Our AI-powered algorithm analyzes your spending patterns, income stability, and risk tolerance to curate personalized stock recommendations. Each suggestion comes with detailed rationale and risk assessment tailored to your financial profile.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Wealth Focus',
      subtitle: 'Invest',
      description: 'Build your future with steady, informed investments.',
      details: 'Focus on sustainable wealth creation through systematic investment strategies. Track your portfolio performance, receive regular insights, and adjust your investment approach based on market conditions and personal financial goals.'
    }
  ];

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How It{' '}
            <span className="text-blue-600">Works</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Three simple steps to transform your investment journey and build lasting wealth.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    <span className="text-sm font-semibold">Step {index + 1}</span>
                    <span className="text-xs">•</span>
                    <span className="text-sm">{step.subtitle}</span>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                  
                  <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {step.details}
                  </p>
                </div>

                <div className="flex-1 flex justify-center">
                  <div className={`relative w-80 h-80 rounded-3xl flex items-center justify-center ${
                    isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-blue-100'
                  }`}>
                    <div className={`w-32 h-32 rounded-2xl flex items-center justify-center ${
                      isDark ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-400'} opacity-60`}></div>
                    <div className={`absolute bottom-6 left-6 w-6 h-6 rounded-full ${isDark ? 'bg-purple-500' : 'bg-purple-400'} opacity-60`}></div>
                    <div className={`absolute top-1/2 right-8 w-4 h-4 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-300'} opacity-40`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;