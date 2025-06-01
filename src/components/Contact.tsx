import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message (in a real app)
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions, suggestions, or want to discuss potential collaborations? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Business">Business</option>
                  <option value="Careers">Careers</option>
                  <option value="Press">Press</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Our Location</h4>
                    <p className="text-gray-400">123 Game Studio Ave, Suite 456</p>
                    <p className="text-gray-400">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Email Us</h4>
                    <p className="text-gray-400">info@beastgames.com</p>
                    <p className="text-gray-400">careers@beastgames.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Call Us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri: 9am-6pm PST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-900 rounded-xl overflow-hidden h-[250px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <p className="text-gray-500">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;