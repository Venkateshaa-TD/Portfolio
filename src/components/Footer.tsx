import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold mb-2">
              Venkateshaa T D
            </div>
            <p className="text-primary-foreground/80 text-sm">
              AI & Data Science Enthusiast
            </p>
          </div>

          
         

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/Venkateshaa-TD', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/venkateshaa-thiyagarajan-76a584321/', label: 'LinkedIn' },
              { Icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
           
            <p>&copy; {currentYear} Venkateshaa T D. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;