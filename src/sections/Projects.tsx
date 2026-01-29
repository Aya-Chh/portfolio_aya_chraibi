import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header',
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
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

 const projects = [
  {
    title: 'Bank Data Migration',
    description: 'Enterprise-grade ETL pipeline for migrating banking data with integrity validation and business rule enforcement.',
    image: '/B.jpg', // Notez le slash au début
    tags: ['PL/SQL', 'ETL', 'Oracle', 'Data Engineering'],
    featured: true,
  },
  {
    title: 'BMCE Direct Integration',
    description: 'PL/SQL function development for banking operations automation and performance optimization.',
    image: '/C.png', // Notez le slash au début
    tags: ['PL/SQL', 'Oracle', 'Banking', 'Automation'],
    featured: false,
  },
  {
    title: 'Library Management System',
    description: 'A desktop application developed to manage books, students, and borrowing operations with a focus on usability and data consistency.',
    image: '/L.jpg', // Notez le slash au début
    tags: ['Java', 'Java Swing', 'MySQL', 'Desktop App'],
    featured: false,
  },
];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="projects-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 opacity-0">
          <div>
            <span className="inline-block text-burgundy text-sm uppercase tracking-[3px] font-medium mb-4">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
              Featured Projects
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-border-subtle text-text-primary rounded-full px-6 py-5 hover:bg-anthracite-lighter hover:border-burgundy/50 transition-all group self-start md:self-auto"
          >
            See more projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group glass-card rounded-2xl overflow-hidden hover:border-burgundy/30 transition-all duration-500 hover:-translate-y-2 opacity-0 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image - Modification ici */}
              <div className="relative h-48 bg-anthracite-lighter overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-burgundy/5" />
                <img 
                  src={project.image} // Utilisation directe de l'import
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Vous pouvez ajouter des boutons ici si nécessaire */}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-text-primary mb-2 group-hover:text-burgundy transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-anthracite-lighter border border-border-subtle text-text-secondary text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors group"
          >
            <span className="font-medium">View all projects on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;