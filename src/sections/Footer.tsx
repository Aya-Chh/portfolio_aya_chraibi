import { useEffect, useRef } from 'react';
import { Linkedin, Mail, Github, ArrowUp, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-content',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aya-Chh', label: 'Github' },
    { icon: Linkedin, href: 'https://linkedin.com/in/chraibi-aya-914102370', label: 'LinkedIn' },
    { icon: Mail, href: 'mail to:ayachraibi894@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  return (
    <footer ref={footerRef} className="py-16 px-4 md:px-8 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="footer-content font-display font-bold text-2xl text-text-primary hover:text-burgundy transition-colors mb-6 opacity-0"
          >
            Aya<span className="text-burgundy">.</span>
          </a>

          {/* Tagline */}
          <p className="footer-content text-text-muted text-sm mb-8 text-center opacity-0">
           Junior Software & Information Systems Engineer
          </p>

          {/* Navigation */}
          <div className="footer-content flex flex-wrap justify-center gap-6 mb-8 opacity-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-text-secondary text-sm hover:text-burgundy transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="footer-content flex gap-3 mb-10 opacity-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-anthracite-lighter border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-burgundy hover:border-burgundy hover:text-white transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="footer-content w-full h-px bg-border-subtle mb-6 opacity-0" />

          {/* Copyright */}
          <div className="footer-content flex flex-col sm:flex-row items-center justify-between w-full gap-4 opacity-0">
            <p className="text-text-muted text-sm flex items-center gap-1">
              © 2025 Aya Chraibi. Made with <Heart className="w-3 h-3 text-burgundy fill-burgundy" />
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-text-muted text-sm hover:text-burgundy transition-colors group"
            >
              Back to top
              <span className="w-8 h-8 rounded-lg bg-anthracite-lighter border border-border-subtle flex items-center justify-center group-hover:bg-burgundy group-hover:border-burgundy transition-all">
                <ArrowUp className="w-4 h-4 group-hover:text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
