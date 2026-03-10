import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      gsap.fromTo(
        '.timeline-line',
        { height: '0%' },
        {
          height: '100%',
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline points animation
      gsap.fromTo(
        '.timeline-point',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Timeline cards animation
      gsap.fromTo(
        '.timeline-card-left',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.timeline-card-right',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationItems = [
    {
      year: '2025 - Aujourd\'hui',
      title: 'Diplôme IRISI',
      institution: 'FSTG, Université Cadi Ayyad, Marrakech',
      description:
        'Ingénierie des Réseaux et des Systèmes d\'Information',
      icon: GraduationCap,
      side: 'left',
    },
    {
      year: '2023 - 2025',
      title: 'DEUST',
      institution: 'FST, Université Hassan Premier, Settat',
      description: 'Diplôme d\'Études Universitaires en Sciences et Techniques',
      icon: BookOpen,
      side: 'right',
    },
    {
      year: '2021 - 2022',
      title: 'Baccalauréat',
      institution: 'Lycée Taha Hussein, Casablanca',
      description: 'Sciences Expérimentales (Option Française) - Mention Bien',
      icon: Award,
      side: 'left',
    },
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-royal-purple text-sm uppercase tracking-[3px] font-medium">
            Mon Parcours
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mt-4">
            Formation & Certifications
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-royal-purple/20 -translate-x-1/2">
            <div className="timeline-line absolute top-0 left-0 w-full bg-royal-purple" />
          </div>

          {/* Mobile Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-royal-purple/20">
            <div className="timeline-line absolute top-0 left-0 w-full bg-royal-purple" />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  item.side === 'right' ? 'md:text-left' : 'md:text-right'
                }`}
              >
                {/* Timeline Point */}
                <div
                  className={`timeline-point absolute left-4 md:left-1/2 w-4 h-4 bg-royal-purple rounded-full border-4 border-midnight shadow-glow -translate-x-1/2 z-10 opacity-0`}
                />

                {/* Content */}
                {item.side === 'left' ? (
                  <>
                    <div className="timeline-card-left pl-12 md:pl-0 md:pr-12 opacity-0">
                      <div className="glass rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                          <span className="text-royal-purple font-display font-semibold text-sm">
                            {item.year}
                          </span>
                          <item.icon className="w-5 h-5 text-royal-purple" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-text-primary mb-1 md:text-right">
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm mb-2 md:text-right">
                          {item.institution}
                        </p>
                        <p className="text-text-secondary text-sm md:text-right">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="timeline-card-right pl-12 md:pl-12 opacity-0">
                      <div className="glass rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-3">
                          <item.icon className="w-5 h-5 text-royal-purple" />
                          <span className="text-royal-purple font-display font-semibold text-sm">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-muted text-sm mb-2">
                          {item.institution}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
