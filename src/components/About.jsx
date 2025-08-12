import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Music, Code, Brain, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Cursando Análise e Desenvolvimento de Sistemas na Unicesumar",
      color: "text-blue-400"
    },
    {
      icon: Briefcase,
      title: "Experiência Profissional",
      description: "Analista de TI na Qualimerchan",
      color: "text-green-400"
    },
    {
      icon: Target,
      title: "Objetivo Profissional",
      description: portfolioData.about.objective,
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Valores",
      description: portfolioData.about.values,
      color: "text-red-400"
    },
    {
      icon: Music,
      title: "Paixões",
      description: portfolioData.about.passions,
      color: "text-purple-400"
    }
  ];

  const stats = [
    { number: "20", label: "Anos", description: "de idade" },
    { number: "3+", label: "Anos", description: "de experiência" },
    { number: "10+", label: "Projetos", description: "desenvolvidos" },
    { number: "5+", label: "Tecnologias", description: "dominadas" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça minha jornada, valores e o que me motiva a criar soluções tecnológicas inovadoras
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Code className="text-primary" size={28} />
                Minha História
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.about.story}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Brain className="text-accent" size={24} />
                Filosofia de Trabalho
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.about.philosophy}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold mb-3">Além da Tecnologia</h4>
              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.about.beyondTech}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-secondary ${highlight.color}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-card border border-border rounded-lg"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

