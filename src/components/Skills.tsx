import { Code, Database, Brain, Cloud, GitBranch, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code,
      skills: ['Python',  'SQL', 'Java', 'JavaScript', 'C++'],
      color: 'text-blue-600'
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLTK'],
      color: 'text-purple-600'
    },
    {
      category: 'Data Tools',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Apache Spark'],
      color: 'text-green-600'
    },
    {
      category: 'Visualization',
      icon: BarChart,
      skills: ['Tableau', 'Power BI', 'Plotly', 'D3.js', 'Seaborn', 'Matplotlib'],
      color: 'text-orange-600'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Google Cloud', 'Docker', 'Atlas',],
      color: 'text-cyan-600'
    },
    {
      category: 'Tools & Others',
      icon: GitBranch,
      skills: ['Git', 'Supabase', 'MongoDB', 'PostgreSQL', 'Redis', 'FastAPI'],
      color: 'text-red-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive toolkit for AI, data science, and modern software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-lift bg-gradient-card border-0 shadow-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-primary">
                    {category.category}
                  </h3>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-white/50 text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-display font-semibold text-center mb-8 text-primary">
              Areas of Expertise
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Machine Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Advanced knowledge in supervised/unsupervised learning, deep learning, and neural networks
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Data Engineering</h4>
                <p className="text-muted-foreground text-sm">
                  Proficient in data pipelines, ETL processes, and big data technologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <BarChart className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Data Visualization</h4>
                <p className="text-muted-foreground text-sm">
                  Expert in creating compelling data stories and interactive dashboards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;