import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin, Mail, Music } from 'lucide-react';
import { portfolioData, socialLinks, navigation } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Github,
      Linkedin,
      Mail,
      Music
    };
    return icons[iconName] || Mail;
  };

  const quickLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Artigos', href: '#articles' },
    { name: 'Contato', href: '#contact' }
  ];

  const services = [
    'Desenvolvimento Web',
    'Automação de Processos',
    'Análise de Dados',
    'Consultoria em TI',
    'Dashboards Interativos',
    'Soluções Personalizadas'
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                {portfolioData.personalInfo.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Desenvolvedor & Analista de TI apaixonado por criar soluções tecnológicas 
                inovadoras que integram ciência, lógica e fé para contribuir positivamente 
                com a sociedade.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = getIcon(link.icon);
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                    title={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-muted-foreground">
              <p className="flex items-center gap-2 mb-1">
                <Mail size={14} />
                {portfolioData.personalInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <Code size={14} />
                Estudante de Análise e Desenvolvimento de Sistemas - Unicesumar
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-border"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2">Fique por dentro das novidades</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Receba atualizações sobre novos projetos, artigos e insights sobre tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} {portfolioData.personalInfo.name}. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="text-red-400" size={14} />
              <span>e</span>
              <Coffee className="text-amber-400" size={14} />
              <span>usando React + Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => scrollToSection('#home')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

