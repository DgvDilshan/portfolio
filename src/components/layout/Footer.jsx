import React from 'react';
import { Heart, Mail, Github, Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Github: Github,
    Linkedin: Linkedin,
    Facebook: Facebook,
    Instagram: Instagram
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-white/60 mb-4 max-w-md">
              {PERSONAL_INFO.title} at {PERSONAL_INFO.university}, passionate about creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-primary transition-colors duration-300"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {PERSONAL_INFO.name}. Made with{' '}
              <Heart className="w-4 h-4 inline-block text-primary fill-primary animate-pulse" />{' '}
              using React & Tailwind CSS
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <span className="text-white/60 text-sm group-hover:text-primary transition-colors duration-300">
                Back to top
              </span>
              <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-primary group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
