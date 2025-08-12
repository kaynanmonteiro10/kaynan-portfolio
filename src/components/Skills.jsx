import { motion } from 'framer-motion';
import { Code, Users, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
        />
      </div>
      {skill.category && (
        <span className="text-xs text-muted-foreground mt-1 inline-block">
          {skill.category}
        </span>
      )}
    </motion.div>
  );

  const SkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-accent font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-1.5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full"
        />
      </div>
    </motion.div>
  );

  // Agrupar habilidades técnicas por categoria
  const technicalByCategory = skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
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
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competências técnicas e interpessoais desenvolvidas ao longo da minha jornada
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-primary" size={28} />
                Habilidades Técnicas
              </h3>
            </motion.div>

            {Object.entries(technicalByCategory).map(([category, categorySkills]) => (
              <motion.div key={category} variants={fadeInUp} className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-accent">{category}</h4>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interpersonal Skills */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="text-accent" size={28} />
                Habilidades Interpessoais
              </h3>
            </motion.div>

            <div className="grid gap-4">
              {skills.interpersonal.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Wrench className="text-primary" size={32} />
            <h3 className="text-2xl font-bold">Sempre Aprendendo</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Acredito que o aprendizado é um processo contínuo. Estou sempre buscando novas 
            tecnologias, metodologias e formas de melhorar minhas habilidades para entregar 
            soluções cada vez mais eficientes e inovadoras.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Aprendizado Contínuo', 'Adaptabilidade', 'Inovação', 'Qualidade'].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

