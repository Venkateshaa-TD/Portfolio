import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      type: 'experience',
      title: 'Data Science Intern',
      organization: 'Virtual Technologies Inc.',
      location: 'Ambattur, Chennai, India',
      duration: 'Jun 2025 - Jul 2025',
      description: 'Developed predictive models for Diabetes predictions.',
      achievements: [
        'Built machine learning model for real-time data processing',
        'Created interactive dashboards using Tableau and Power BI',
        'Collaborated with cross-functional teams on data-driven solutions'
      ],
      skills: ['Python', 'Pandas', 'Scikit-learn', 'Tableau']
    },
    {
      type: 'project',
      title: 'AI Research Assistant',
      organization: 'R M K College Research Lab',
      location: 'Kavaraipettai, India',
      duration: 'Jan 2024 - Present',
      description: 'Leading research project on computer vision applications in healthcare diagnostics.',
      achievements: [
        'Implemented CNN models for medical image classification',
        'Achieved 92% accuracy in diagnostic prediction models',
        'Presented findings at college symposium'
      ],
      skills: ['TensorFlow', 'OpenCV', 'Python', 'Research']
    },
    {
      type: ' National level Tech Symposium',
      title: ' Sympo-Winner',
      organization: '',
      location: 'Chennai, India',
      duration: 'Aug-Sep 2024',
      description: 'First place winner for Prompt engineering and Technical Debate.',
      achievements: [
        'Secured 1st place among 50+ teams',
        'Demonstrated advanced prompt engineering techniques',
        'Showcased strong technical debate skills'
      ],
      skills: ['Prompt Engineering', 'Public Speaking', 'Team Collaboration']
    }
  ];

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Stanford University',
      date: '2024',
      credential: 'ML-2024-001'
    },
    {
      title: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2024',
      credential: 'GCP-DE-001'
    },
    {
      title: 'Deep Learning with TensorFlow',
      issuer: 'edX - MIT',
      date: '2023',
      credential: 'MIT-DL-023'
    },
    {
      title: 'Data Science with Python',
      issuer: 'Kaggle Learn',
      date: '2023',
      credential: 'KGL-DS-456'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return Building;
      case 'project':
        return Award;
      case 'hackathon':
        return Award;
      default:
        return Building;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'experience':
        return 'text-blue-600';
      case 'project':
        return 'text-purple-600';
      case 'hackathon':
        return 'text-green-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience, research projects, and recognition in AI & Data Science
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-semibold mb-8 text-primary text-center">
            Professional Journey
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = getTypeIcon(exp.type);
              return (
                <Card 
                  key={index} 
                  className="hover-lift bg-gradient-card border-0 shadow-card animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-primary/10 ${getTypeColor(exp.type)}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-display font-semibold text-primary">
                            {exp.title}
                          </h4>
                          <p className="text-lg text-accent font-medium">{exp.organization}</p>
                          <div className="flex items-center space-x-4 text-muted-foreground text-sm mt-1">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-primary mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-display font-semibold mb-8 text-primary text-center">
            Certifications & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="hover-lift bg-gradient-card border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-1">{cert.title}</h4>
                      <p className="text-accent text-sm font-medium">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-muted-foreground text-sm">{cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          {cert.credential}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;