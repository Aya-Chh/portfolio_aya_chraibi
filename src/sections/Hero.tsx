import { useEffect, useRef } from 'react';
import { ArrowRight, Linkedin, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1 },
          0.4
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.7 },
          0.7
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.9
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5 },
          1.1
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9, rotateY: -10 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 1.2 },
          0.5
        );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-burgundy/3 rounded-full blur-[80px] -z-10" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(225, 29, 72, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(225, 29, 72, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-anthracite-lighter border border-border-subtle mb-6 opacity-0">
              <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse" />
              <span className="text-text-secondary text-sm">Available for opportunities</span>
            </div>

            <h1
              ref={titleRef}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary mb-4 opacity-0 tracking-tight"
            >
               Aya
              <span className="text-gradient-burgundy"> Chraibi</span>
            </h1>

            <p
              ref={subtitleRef}
              className="font-display text-xl md:text-2xl text-burgundy font-medium mb-6 opacity-0"
            >
              Software Engineering Student
            </p>

            <p
              ref={descRef}
              className="text-text-secondary text-base md:text-lg max-w-lg mb-8 leading-relaxed opacity-0"
            >
              Hands-on experience through academic & real-world projects.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-burgundy text-white rounded-full px-8 py-6 text-base font-medium hover:bg-burgundy-light hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Let's Connect
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#projects')}
                variant="outline"
                className="border-2 border-border-subtle text-text-primary rounded-full px-8 py-6 text-base font-medium hover:bg-anthracite-lighter hover:border-burgundy/50 transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-10">
              {[
                { icon: Github, href: 'https://github.com/Aya-Chh' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/chraibi-aya-914102370/' },
                { icon: Mail, href: 'mailto:ayachraibi894@gmail.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 rounded-xl bg-anthracite-lighter border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-burgundy hover:border-burgundy hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative opacity-0"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-burgundy/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden border border-border-subtle">
                <img
                  src="/profil-photo.png"
                  alt="Aya Chraibi"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl bg-burgundy/10 border border-burgundy/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-burgundy/20 -z-10" />
              
              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 glass-card rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display font-bold text-burgundy">3+</span>
                  <span className="text-text-secondary text-xs">Years<br/>Of Engineering Studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-border-subtle rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-burgundy rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
