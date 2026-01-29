import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Aya demonstrated exceptional technical skills and professionalism during her internship. Her work on our banking data migration project was outstanding.",
      author: "Team Lead",
      role: "Eurafric Information",
      avatar: "E",
    },
    {
      quote: "Her ability to quickly understand complex business requirements and translate them into efficient PL/SQL solutions impressed the entire team.",
      author: "Senior Developer",
      role: "BMCE Bank",
      avatar: "S",
    },
    {
      quote: "Aya's attention to detail and commitment to quality made her a valuable asset to our development team. Highly recommended!",
      author: "Project Manager",
      role: "Tech Company",
      avatar: "P",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="testimonials-header text-center mb-12 opacity-0">
          <span className="inline-block text-burgundy text-sm uppercase tracking-[3px] font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
            What People Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card glass-card rounded-3xl p-8 md:p-12 relative opacity-0">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="pt-4">
            <p className="text-text-primary text-lg md:text-xl leading-relaxed mb-8 font-light">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-burgundy/20 flex items-center justify-center">
                <span className="text-burgundy font-display font-bold">
                  {testimonials[currentIndex].avatar}
                </span>
              </div>
              <div>
                <p className="text-text-primary font-medium">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-text-muted text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-subtle">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-burgundy'
                      : 'bg-border-subtle hover:bg-burgundy/50'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-xl bg-anthracite-lighter border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-burgundy hover:border-burgundy hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-xl bg-anthracite-lighter border border-border-subtle flex items-center justify-center text-text-secondary hover:bg-burgundy hover:border-burgundy hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
