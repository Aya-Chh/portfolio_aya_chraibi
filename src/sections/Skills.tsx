import { useEffect, useRef } from 'react';
import { 
  Layers, 
  Zap, 
  Shield, 
  Sparkles,
  Code,
  Terminal,
  GitBranch,
  Cloud
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header',
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
        '.skill-item',
        { opacity: 0, scale: 0.8, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
      color: 'burgundy',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      color: 'gold',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Implementing secure coding practices and data protection',
      color: 'burgundy',
    },
    {
      icon: Layers,
      title: 'Architecture',
      description: 'Designing scalable system architectures',
      color: 'gold',
    },
    {
      icon: Terminal,
      title: 'Automation',
      description: 'Building CI/CD pipelines and automated workflows',
      color: 'burgundy',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Expert Git workflow and collaboration',
      color: 'gold',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Deploying and managing cloud infrastructure',
      color: 'burgundy',
    },
    {
      icon: Sparkles,
      title: 'UX Focus',
      description: 'Creating intuitive and delightful user experiences',
      color: 'gold',
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="skills-header text-center mb-16 opacity-0">
          <span className="inline-block text-burgundy text-sm uppercase tracking-[3px] font-medium mb-4">
            Expertise
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            The Secret Sauce
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            What sets me apart and drives the quality of every project I work on.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item glass-card rounded-2xl p-6 group hover:border-burgundy/40 transition-all duration-300 hover:-translate-y-2 opacity-0 cursor-default"
              style={{ perspective: '1000px' }}
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/20 group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                {skill.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16">
          <p className="text-center text-text-muted text-sm mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Linux'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-anthracite-lighter border border-border-subtle text-text-secondary text-sm hover:border-burgundy/50 hover:text-text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
