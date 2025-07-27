import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  isDark: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this app suitable for beginners?",
      answer: "Absolutely! InvestWise is specifically designed for beginners. We use simple language, visual learning methods, and provide step-by-step guidance to help you understand equity markets from the ground up. No prior investment experience is required."
    },
    {
      question: "How does the app recommend stocks?",
      answer: "Our AI-powered algorithm analyzes multiple factors including your income, spending patterns, risk tolerance, investment goals, and market conditions. We then match these with our extensive stock database to provide personalized recommendations that align with your financial profile."
    },
    {
      question: "Is my financial data safe?",
      answer: "Yes, your data security is our top priority. We use bank-grade encryption, secure servers, and follow strict data protection protocols. Your personal and financial information is never shared with third parties without your explicit consent."
    },
    {
      question: "Is this service free to use?",
      answer: "We offer a comprehensive free tier that includes basic learning modules and limited stock recommendations. For advanced features like unlimited personalized suggestions, portfolio tracking, and premium content, we offer affordable subscription plans."
    },
    {
      question: "Can I track my investment performance?",
      answer: "Yes! Our platform includes comprehensive portfolio tracking tools that show your investment performance, gains/losses, dividend tracking, and detailed analytics. You can monitor your investments in real-time and receive regular performance reports."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked{' '}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get answers to common questions about InvestWise and start your investment journey with confidence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-200 ${
                  isDark ? 'hover:bg-gray-750' : 'hover:bg-gray-50'
                }`}
              >
                <h3 className={`text-lg font-semibold pr-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className={`w-6 h-6 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                ) : (
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                )}
              </button>
              
              {openIndex === index && (
                <div className={`px-8 pb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;