import { ExternalLink, Github, Brain, BarChart3, Eye, MessageSquare, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Intelligent Recommendation System',
      role: 'ML Engineer & Data Scientist',
      description: 'Machine learning-based recommendation engine using collaborative filtering and content-based approaches for personalized user experiences.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      icon: Brain,
      github: '#',
      demo: '#'
    },
    {
      title: 'AYUSH-ONE',
      role: 'Full Stack Developer & UI/UX Designer',
      description: 'Our project AYUSH ONE aimed to bridge the gap between traditional medicine (AYUSH) and modern medicine through a unified digital portal – making AYUSH doctors more accessible, trusted, and discoverable for citizens.',
      tech: ['React', 'Voice-Flow', 'Supabase', 'Jitsi','TailwindCSS'],
      icon: BarChart3,
      github: 'https://github.com/Venkateshaa-TD/AYUSH-ONE',
      demo: 'https://ayushone.vercel.app/'
    },
    {
      title: 'Jaundice Prediction with Deep Learning',
      role: 'Front-end Developer',
      description: 'Developed a DL model to detect Jaundice through images of Skin and eyes for early healthcare intervention and diagnosis.',
      tech: ['React', 'Tailwind', 'HTML'],
      icon: Eye,
      github: '#',
      demo: '#'
    },
    {
      title: 'Career Recommendation Site',
      role: 'Full Stack Developer',
      description: 'Career Guiding website for enlighting each and every students future',
      tech: ['React', 'Tailwind', 'Voice Flow', 'Supabase'],
      icon: MessageSquare,
      github: 'https://github.com/Venkateshaa-TD/Career-Compass.git',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative AI and data science solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-gradient-card border-0 shadow-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                {/* 👆 ONLY NEW ADDITION - Role Badge */}
                <div className="flex items-center mt-2">
                  <User className="w-4 h-4 text-primary mr-2" />
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {project.role}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <div className="flex space-x-4 w-full">
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="default" 
                    className="flex-1 bg-primary hover:bg-primary-light transition-colors"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
