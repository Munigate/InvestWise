import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in real app, this would send to backend/Excel)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Feedback submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+91 98765 43210',
      description: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: Mail,
      title: 'Email Address',
      value: 'support@investwise.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: 'InvestWise Technologies Pvt Ltd',
      description: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051, India'
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
            Get in{' '}
            <span className="text-blue-600">Touch</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have questions about InvestWise? Want to share feedback? We'd love to hear from you. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h2>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                        : 'bg-gray-50 hover:bg-white border border-gray-200 hover:shadow-lg'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-blue-600' : 'bg-blue-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        isDark ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {info.title}
                      </h3>
                      <p className={`text-lg font-medium mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {info.value}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className={`mt-8 p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-blue-50 border border-blue-200'}`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Office Hours
              </h3>
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <MessageSquare className={`w-6 h-6 ${isDark ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Share Your Feedback
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500' 
                          : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                        isDark 
                          ? 'bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500' 
                          : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500' 
                        : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 resize-none ${
                      isDark 
                        ? 'bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500' 
                        : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Share your thoughts, feedback, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                  } text-white shadow-lg hover:shadow-blue-500/25`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-100 border border-green-200 text-green-800">
                    ✅ Thank you! Your feedback has been submitted successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-100 border border-red-200 text-red-800">
                    ❌ Sorry, there was an error submitting your feedback. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;