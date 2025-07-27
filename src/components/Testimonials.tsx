import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const testimonials = [
    {
      text: "I never understood stocks before. This app made it so easy to learn and start investing safely.",
      author: "Priya Sharma",
      role: "Software Engineer",
      rating: 5
    },
    {
      text: "Hung-up shoes early as I got backed-up with InvestWise.",
      author: "Rajesh Kumar",
      role: "Early Retiree",
      rating: 5
    },
    {
      text: "I make money even when I sleep, travel and party.",
      author: "Ananya Patel",
      role: "Digital Nomad",
      rating: 5
    },
    {
      text: "The personalized recommendations helped me build a diversified portfolio that matches my risk appetite perfectly.",
      author: "Vikram Singh",
      role: "Marketing Manager",
      rating: 5
    },
    {
      text: "As a student, I appreciated the simple language and visual learning approach. Now I'm confident about my financial future.",
      author: "Shreya Gupta",
      role: "MBA Student",
      rating: 5
    }
  ];

  return (
    <section className={`py-20 px-4 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What Our{' '}
            <span className="text-blue-600">Investors</span>{' '}
            Say
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Join thousands of satisfied investors who have transformed their financial future with InvestWise.
          </p>
        </div>

        {/* Horizontal scrolling testimonials */}
        <div className="relative">
          <div className="flex animate-scroll gap-6" style={{
            animation: 'scroll 30s linear infinite',
            width: 'calc(400px * 10)' // Duplicate testimonials for seamless loop
          }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-96 p-8 rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 border border-gray-600' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    index % 3 === 0 ? 'bg-blue-600' : index % 3 === 1 ? 'bg-purple-600' : 'bg-green-600'
                  }`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 5));
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;