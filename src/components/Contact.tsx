import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-lg text-dark-700 mb-12 max-w-2xl">
          Have a project in mind or just want to say hello? Feel free to reach out! I'm always
          open to discussing new projects, creative ideas, or opportunities to be part of your
          vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Contact Information</h3>
            <p className="text-dark-700 mb-8">
              Feel free to contact me through any of the following methods, or use the form to send me a message directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-800">Location</h4>
                  <p className="text-dark-600">Morocco</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-800">Email</h4>
                  <a
                    href="mailto:contact@abdelilah.dev"
                    className="text-dark-600 hover:text-primary-600 transition-colors"
                  >
                    contact@abdelilah.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-dark-800">Phone</h4>
                  <a
                    href="tel:+212600000000"
                    className="text-dark-600 hover:text-primary-600 transition-colors"
                  >
                    +212 600 000 000
                  </a>
                </div>
              </div>
            </div>

            {/* Map or image placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm h-48 bg-gray-200">
              <img
                src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Morocco Map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-dark-800 mb-6">Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;