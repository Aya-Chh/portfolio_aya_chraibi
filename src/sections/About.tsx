import { useEffect, useRef } from 'react';
import { Code2, Database, Server, Cpu, Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.tech-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    { icon: Code2, name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind','C ','Java (OOP)' , 'PL/SQL',  'Python',  'JavaScript'] },
    { icon: Server, name: 'Backend', items: ['Node.js', 'Python', 'PL/SQL', 'REST APIs'] },
    { icon: Database, name: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { icon: Cpu, name: 'Tools & Technologies', items: ['Git', 'Linux','Java Swing' , 'Network Administration'] },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-burgundy/[0.02] to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="about-content inline-block text-burgundy text-sm uppercase tracking-[3px] font-medium mb-4 opacity-0">
            About Me
          </span>
          <h2 className="about-content font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 opacity-0">
            Crafting Digital Experiences
          </h2>
          <p className="about-content text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed opacity-0">
           I am an engineering student specializing in Information Systems and Network Engineering (IRISI).  
           I am passionate about software development, databases, and information systems.

           Through academic projects and professional internships, I have gained hands-on experience
           in backend development, database design, and data migration using PL/SQL and relational databases.

           I am motivated, detail-oriented, and always eager to learn new technologies
           and contribute to innovative, high-impact projects.
          </p>

          {/* ✅ CV Button */}
          <div className="about-content mt-8 opacity-0">
            <a
              href="/cv_aya_chraibi.pdf"
              download
              className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-xl font-medium hover:bg-burgundy/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-burgundy/20"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card glass-card rounded-2xl p-6 hover:border-burgundy/30 transition-all duration-300 hover:-translate-y-1 opacity-0 group"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center mb-4 group-hover:bg-burgundy/20 transition-colors">
                <tech.icon className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
                {tech.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-anthracite-lighter text-text-secondary text-xs font-medium border border-border-subtle"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="about-content mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0">
          {[
            { value: '3+', label: 'years of engineering studies' },
            { value: '3+', label: 'Projects Completed' },
            { value: '5+', label: 'Technologies' },
            { value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-burgundy mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

