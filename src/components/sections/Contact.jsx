import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Facebook, Instagram, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/Fadein';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      link: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@DgvDilshan',
      link: PERSONAL_INFO.github
    }
  ];

  const socialIcons = {
    Github: Github,
    Linkedin: Linkedin,
    Facebook: Facebook,
    Instagram: Instagram
  };

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="contact" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeIn delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <p className="text-white/60 mb-8">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <FadeIn key={index} delay={150 + index * 50}>
                    <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white/60 mb-1">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-primary transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Social Links */}
              <FadeIn delay={350}>
                <div>
                  <p className="text-white/60 mb-4">Follow me on social media:</p>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => {
                      const IconComponent = socialIcons[social.icon];
                      return (
                        <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                        >
                          <IconComponent className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors duration-300" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={200}>
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-primary/20 border border-primary/30 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary font-medium">Message sent successfully!</p>
                    <p className="text-primary/80 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-white/60 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
