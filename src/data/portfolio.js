export const portfolioData = {
  personalInfo: {
    name: "Kaynan Monteiro da Silva",
    title: "Desenvolvedor & Analista de TI",
    subtitle: "Integrando ciência, lógica e fé em soluções tecnológicas",
    description: "Estudante de Análise e Desenvolvimento de Sistemas, músico instrumentista, Analista de TI na Qualimerchan e especialista em automação com experiência em Python, SQL, VBA, automação e desenvolvimento web. Apaixonado por integrar ciência, lógica, filosofia e fé em soluções tecnológicas.",
    location: "Pindoretama, Ceará, Brasil",
    email: "kaynanmonteirodasilva@gmail.com",
    profileImage: "/assets/profile-photo.jpeg",
    socialLinks: {
      github: "https://github.com/kaynanmonteiro10",
      linkedin: "https://www.linkedin.com/in/kaynan-monteiro-2a855b256",
      email: "mailto:kaynanmonteirodasilva@gmail.com",
      audio: "https://audio.com/kaynan-monteiro",
      instagramProjects: "https://www.instagram.com/insypeo",
      instagramPersonal: "https://www.instagram.com/kaynan_monteiro"
    }
  },
  about: {
    story: "Aos 20 anos, sou um desenvolvedor apaixonado por tecnologia e música. Atualmente cursando Análise e Desenvolvimento de Sistemas na Unicesumar (2024-2027), combino conhecimento técnico com uma visão humanística única. Formado em Técnico em Eletrotécnica Integrado ao Ensino Médio pela E.E.E.P PROFESSORA ALDA FAÇANHA (2020-2022).",
    philosophy: "Acredito que a tecnologia deve servir à humanidade, integrando ciência, lógica e fé para criar soluções que não apenas funcionem, mas que também façam sentido e contribuam positivamente para a sociedade.",
    beyondTech: "Como músico instrumentista, encontro na música uma forma de expressão que complementa minha paixão pela programação. Ambas requerem precisão, criatividade e a busca constante pela perfeição.",
    education: [
      {
        degree: "Análise e Desenvolvimento de Sistemas",
        institution: "Unicesumar",
        period: "2024 - 2027",
        status: "Em andamento"
      },
      {
        degree: "Técnico em Eletrotécnica Integrado ao Ensino Médio",
        institution: "E.E.E.P PROFESSORA ALDA FAÇANHA",
        period: "2020 - 2022",
        status: "Concluído"
      }
    ],
    experience: [
      {
        position: "Analista de TI",
        company: "Qualimerchan",
        period: "Janeiro 2025 - Presente",
        description: "Responsável pela análise e desenvolvimento de soluções tecnológicas para otimização de processos empresariais."
      },
      {
        position: "Auxiliar Administrativo",
        company: "Qualimerchan",
        period: "Abril 2024 - Janeiro 2025",
        description: "Suporte administrativo e início da transição para área de tecnologia da informação."
      }
    ],
    objective: "Ser referência em tecnologia, alcançar independência financeira e contribuir positivamente à sociedade.",
    values: "Integrando ciência, lógica, filosofia e fé em soluções tecnológicas",
    passions: "Música instrumentista, filosofia e desenvolvimento de soluções inovadoras"
  }
};

export const skills = {
  technical: [
    { name: "Python", level: 90, category: "Linguagem" },
    { name: "SQL", level: 85, category: "Banco de Dados" },
    { name: "VBA", level: 80, category: "Automação" },
    { name: "Excel Avançado", level: 95, category: "Produtividade" },
    { name: "Power BI", level: 85, category: "Visualização" },
    { name: "Automação", level: 90, category: "Produtividade" },
    { name: "Desenvolvimento Web", level: 75, category: "Web" },
    { name: "JavaScript", level: 70, category: "Linguagem" },
    { name: "React", level: 65, category: "Framework" },
    { name: "Git", level: 80, category: "Versionamento" }
  ],
  interpersonal: [
    { name: "Comunicação Clara", level: 90 },
    { name: "Pensamento Analítico", level: 95 },
    { name: "Organização", level: 90 },
    { name: "Resiliência", level: 85 },
    { name: "Aprendizado Rápido", level: 95 },
    { name: "Liderança", level: 80 },
    { name: "Trabalho em Equipe", level: 85 },
    { name: "Resolução de Problemas", level: 90 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Bot Financeiro Pessoal",
    description: "Assistente inteligente para registrar receitas/despesas, monitorar investimentos e gerar relatórios financeiros detalhados. (Projeto interno via Base44, sem código público)",
    technologies: ["Python", "Base44", "API", "Automação"],
    category: "Automação",
    status: "Concluído",
    features: [
      "Registro automático de transações",
      "Monitoramento de investimentos",
      "Relatórios personalizados",
      "Interface conversacional"
    ],
    github: null,
    demo: null
  },
  {
    id: 2,
    title: "ProjetoJuntarPdf",
    description: "Aplicativo Windows desenvolvido em Python para unir múltiplos arquivos PDF de forma rápida e eficiente.",
    technologies: ["Python", "PyPDF2", "Tkinter", "Windows"],
    category: "Produtividade",
    status: "Concluído",
    features: [
      "Interface gráfica intuitiva",
      "Processamento em lote",
      "Preservação de qualidade",
      "Suporte a múltiplos formatos"
    ],
    github: "https://github.com/kaynanmonteiro10/ProjetoJuntarPdf",
    demo: null
  },
  {
    id: 3,
    title: "AutoPaste",
    description: "Utilitário desenvolvido em Roff para automação da colagem e manipulação de texto, aumentando a produtividade.",
    technologies: ["Roff", "Shell Script", "Automação"],
    category: "Automação",
    status: "Concluído",
    features: [
      "Automação de colagem",
      "Manipulação de texto",
      "Integração com sistema",
      "Interface de linha de comando"
    ],
    github: "https://github.com/kaynanmonteiro10/AutoPaste",
    demo: null
  },
  {
    id: 4,
    title: "Ferramenta de Aprendizado de Programação",
    description: "Plataforma educativa para introdução à programação, ideal para iniciantes que querem aprender conceitos fundamentais.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    category: "Educação",
    status: "Concluído",
    features: [
      "Exercícios interativos",
      "Feedback em tempo real",
      "Progressão gamificada",
      "Múltiplas linguagens"
    ],
    github: "https://github.com/kaynanmonteiro10/LearningTool",
    demo: null
  },
  {
    id: 5,
    title: "Arranjos Musicais",
    description: "Coleção de arranjos musicais publicados no Audio.com, com foco em performance e edição instrumental refinada.",
    technologies: ["Audio.com", "Edição de Áudio", "Composição"],
    category: "Música",
    status: "Concluído",
    features: [
      "Arranjos originais",
      "Qualidade profissional",
      "Múltiplos instrumentos",
      "Publicação online"
    ],
    github: null,
    demo: "https://audio.com/kaynan-monteiro"
  },
  {
    id: 6,
    title: "Plataformas Educacionais Interativas",
    description: "Desenvolvimento de soluções educacionais com foco em interatividade e engajamento do usuário.",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Educação",
    status: "Em andamento",
    features: [
      "Salas virtuais",
      "Gamificação",
      "Analytics de aprendizado",
      "Colaboração em tempo real"
    ],
    github: null,
    demo: null
  },
  {
    id: 7,
    title: "Dashboards Avançados de Dados",
    description: "Criação de dashboards interativos para visualização e análise de dados complexos em tempo real.",
    technologies: ["Power BI", "Python", "SQL", "D3.js"],
    category: "Dados",
    status: "Em andamento",
    features: [
      "Visualizações interativas",
      "Dados em tempo real",
      "Múltiplas fontes",
      "Relatórios automatizados"
    ],
    github: null,
    demo: null
  },
  {
    id: 8,
    title: "Soluções de IA para Gestão",
    description: "Desenvolvimento de ferramentas de inteligência artificial aplicadas à gestão e otimização de processos.",
    technologies: ["Python", "Machine Learning", "TensorFlow", "API"],
    category: "IA",
    status: "Planejado",
    features: [
      "Análise preditiva",
      "Automação inteligente",
      "Otimização de processos",
      "Interface intuitiva"
    ],
    github: null,
    demo: null
  }
];

export const articles = [
  {
    id: 1,
    title: "A Existência de Deus: Uma Análise Interdisciplinar entre Matemática, Biologia, Lógica e Fé",
    description: "Artigo técnico e interdisciplinar que explora a intersecção entre ciência e fé através de uma análise rigorosa.",
    category: "Ciência & Fé",
    readTime: "15 min",
    publishDate: "2024-03-15",
    tags: ["Filosofia", "Matemática", "Biologia", "Lógica", "Fé"],
    excerpt: "Uma investigação profunda sobre como diferentes disciplinas podem contribuir para o entendimento de questões fundamentais da existência.",
    content: "# A Existência de Deus: Uma Análise Interdisciplinar\n\nEste artigo explora a intersecção fascinante entre ciência e fé...",
    pdfPath: "/assets/AExistenciaDeDeus.pdf"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kaynanmonteiro10",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kaynan-monteiro-2a855b256",
    icon: "Linkedin"
  },
  {
    name: "Email",
    url: "mailto:kaynanmonteirodasilva@gmail.com",
    icon: "Mail"
  },
  {
    name: "Audio.com",
    url: "https://audio.com/kaynan-monteiro",
    icon: "Music"
  },
  {
    name: "Instagram Projetos",
    url: "https://www.instagram.com/insypeo",
    icon: "Instagram"
  },
  {
    name: "Instagram Pessoal",
    url: "https://www.instagram.com/kaynan_monteiro",
    icon: "Instagram"
  }
];

export const navigation = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Artigos", href: "#articles" },
  { name: "Contato", href: "#contact" }
];

