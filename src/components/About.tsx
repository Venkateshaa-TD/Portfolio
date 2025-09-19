import { Brain, Database, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep learning, neural networks, and intelligent systems'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Data analysis, visualization, and predictive modeling'
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Python,Java, SQL, and modern development practices'
    },
    {
      icon: TrendingUp,
      title: 'Research Focus',
      description: 'Computer vision, NLP, and data-driven solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-professional hover-lift">
                <img 
                  src={profileAvatar} 
                  alt="Venkateshaa T D" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div className="bg-gradient-card rounded-xl p-8 shadow-card hover-lift">
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                  AI & Data Science Student
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Currently pursuing B.Tech in Artificial Intelligence & Data Science at 
                  <span className="font-semibold text-primary"> R M K College of Engineering and Technology</span>.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Passionate about leveraging AI and machine learning to solve real-world problems, 
                  with hands-on experience in data analysis, predictive modeling, and intelligent system development.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="hover-lift bg-gradient-card border-0 shadow-card">
                    <CardContent className="p-4 text-center">
                      <item.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;