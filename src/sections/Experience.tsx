import { useEffect, useRef } from 'react';
import { Briefcase, Database, Code2, Server } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards 3D flip animation
      gsap.fromTo(
        '.experience-card',
        { opacity: 0, rotateX: 30, y: 50 },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Tech badges animation
      gsap.fromTo(
        '.tech-badge',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      company: 'Eurafric Information',
      period: 'Juillet - Août 2025',
      role: 'Stage',
      projects: [
        {
          title: 'Migration des données bancaires « FluxStatique »',
          description:
            "Mise en place d'une architecture ETL pour la migration des données bancaires. Application des règles métiers précises définies par l'entreprise. Optimisation des procédures et vérification de l'intégrité des données migrées.",
          technologies: ['PL/SQL', 'Architecture ETL'],
          icon: Database,
        },
        {
          title: 'Développement de fonctions PL/SQL',
          description:
            'Conception et développement de fonctions PL/SQL pour BMCE DIRECT et SALAFIN. Amélioration des performances des traitements internes et automatisation des opérations.',
          technologies: ['PL/SQL', 'Bases de données relationnelles'],
          icon: Code2,
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-royal-purple text-sm uppercase tracking-[3px] font-medium">
            Mon Expérience
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mt-4">
            Expérience Professionnelle
          </h2>
        </div>

        {/* Experience Cards */}
        <div ref={cardsRef} className="space-y-8" style={{ perspective: '1000px' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card glass rounded-3xl p-8 md:p-10 opacity-0"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-midnight-lighter">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-royal-purple/20 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-royal-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary">
                      {exp.company}
                    </h3>
                    <p className="text-text-muted text-sm">{exp.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-royal-purple/20 text-royal-purple text-sm font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Projects */}
              <div className="grid md:grid-cols-2 gap-8">
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="group bg-midnight-lighter rounded-2xl p-6 hover:bg-midnight-light transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-royal-purple/20 flex items-center justify-center group-hover:bg-royal-purple transition-colors">
                        <project.icon className="w-5 h-5 text-royal-purple group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-display font-semibold text-lg text-text-primary">
                        {project.title}
                      </h4>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="tech-badge px-3 py-1 rounded-full bg-midnight text-text-secondary text-xs font-medium border border-midnight-lighter hover:bg-royal-purple hover:border-royal-purple hover:text-white transition-all cursor-default opacity-0"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-midnight-lighter">
            <Server className="w-5 h-5 text-royal-purple" />
            <span className="text-text-secondary text-sm">
              Toujours à la recherche de nouvelles opportunités
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
