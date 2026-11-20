/**
 * Todo o conteúdo do portfólio fica centralizado aqui.
 * Para atualizar textos, projetos, habilidades ou contatos,
 * basta editar este arquivo — os componentes se atualizam sozinhos.
 */

export const profile = {
  name: "ABIMAEL",
  fullName: "Abimael de Menezes Pedro",
  brand: "BIMA DEV",
  headline: "Estudante de Engenharia de Software | Customer Experience (CX) | UI/UX Designer",
  location: "Praia Grande, São Paulo, Brasil",
  email: "abimaeldevfull.stack@gmail.com",
  resume: "/curriculo-abimael-pedro.pdf",
  photo: "/img/ft2.png",
  professions: [
    "Universitário em Engenharia de Software.",
    "Desenvolvedor Web Full-Stack",
    "UI/UX Designer",
    "Customer Experience (CX)",
    "Designer Gráfico",
    "Especialista em Conversão Digital",
  ],
};

export const social = {
  linkedin: "https://www.linkedin.com/in/bimadevfull/",
  instagram: "https://instagram.com/bima.script",
  instagramHandle: "@bima.script",
  whatsapp: "https://wa.me/5513988814117",
  github: "https://github.com/bimadevfull",
};

export const socialList = [
  { name: "LinkedIn", url: social.linkedin, icon: "fab fa-linkedin-in", className: "linkedin-highlight" },
  { name: "Instagram", url: social.instagram, icon: "fab fa-instagram" },
  { name: "WhatsApp", url: social.whatsapp, icon: "fab fa-whatsapp", className: "whatsapp-highlight" },
  { name: "GitHub", url: social.github, icon: "fab fa-github" },
];

export const navItems = [
  { id: "home", label: "INÍCIO", icon: "fas fa-home" },
  { id: "about", label: "BIMA TECH", image: "/img/semfund.png" },
  { id: "services", label: "SERVIÇOS", icon: "fas fa-cogs" },
  { id: "education", label: "FORMAÇÕES", icon: "fas fa-graduation-cap" },
  { id: "skills", label: "HABILIDADES", icon: "fas fa-code" },
  { id: "design", label: "DESIGN", icon: "fas fa-palette" },
  { id: "projects", label: "PROJETOS", icon: "fas fa-rocket" },
  { id: "contact", label: "CONTATO", icon: "fas fa-envelope" },
];

export const heroTechIcons = [
  { title: "HTML5", icon: "fab fa-html5" },
  { title: "CSS3", icon: "fab fa-css3-alt" },
  { title: "JavaScript", icon: "fab fa-js-square" },
  { title: "React", icon: "fab fa-react" },
  { title: "Node.js", icon: "fab fa-node-js" },
  { title: "PHP", icon: "fab fa-php" },
  { title: "Figma", icon: "fab fa-figma" },
  { title: "Adobe Illustrator", icon: "fas fa-pen-nib" },
];

export const linkedinCard = {
  experience: "4 anos",
  bio: [
    "Profissional apaixonado por tecnologia e experiência do usuário, atuando como <strong>Customer Experience (CX) / SAC</strong> no setor de marketing de uma rede varejista, integrando relacionamento com o cliente e inteligência de dados.",
    "Busco constantemente unir código, design e estratégia para criar experiências digitais que geram resultados reais para empresas e usuários.",
  ],
  skills: ["Desenvolvimento Web", "UI/UX Design", "Customer Experience (CX)", "React.js", "Figma"],
};

export const about = {
  title: "BIMA TECH CONSULTORIA",
  subtitle: "CONSULTORIA DEV COM FOCO EM IMPACTO.",
  tagline: "Inovação • Eficiência • Impacto",
  image: "/img/cos.png",
  paragraphs: [
    "Fundada por Abimael aos 18 anos, com mais de 13 projetos entregues e clientes satisfeitos, nossa atuação une experiência em desenvolvimento Full-Stack com visão estratégica centrada na experiência do usuário e em Customer Experience (CX). Transformamos ideias em soluções digitais reais, funcionais e escaláveis.",
    "Acreditamos que tecnologia só faz sentido quando melhora a vida das pessoas e potencializa resultados.",
  ],
  highlights: [
    { icon: "fas fa-rocket", label: "Soluções Inovadoras" },
    { icon: "fas fa-clock", label: "Entrega no Prazo" },
    { icon: "fas fa-shield-alt", label: "Código de Qualidade" },
    { icon: "fas fa-users", label: "Foco no Cliente" },
  ],
  stats: [
    { value: 13, label: "PROJETOS CONCLUÍDOS COM CLIENTES SATISFEITOS" },
    { value: 100, label: "% SATISFAÇÃO DOS CLIENTES" },
    { value: 4, label: "ANOS DE EXPERIÊNCIA EM TECNOLOGIA" },
  ],
};

export const services = [
  {
    featured: true,
    badge: "MAIS PROCURADO",
    icon: "fas fa-laptop-code",
    title: "Desenvolvimento Web",
    description:
      "Criação de sites responsivos e aplicações web modernas, utilizando as mais recentes tecnologias e melhores práticas do mercado. Foco em performance, SEO e experiência do usuário.",
    features: ["Sites Responsivos e Otimizados", "Aplicações Web Personalizadas", "E-commerce", "Landing Pages de Alta Conversão"],
  },
  {
    icon: "fas fa-tools",
    title: "Consultoria Tech",
    description:
      "Consultoria & Freelancer especializada em tecnologia, arquitetura de projetos e otimização de sistemas. Atuo também como freelancer para projetos pontuais e desenvolvimento sob demanda.",
    features: ["Análise de Projetos", "Otimização de Performance", "Escolha de Stack Tecnológico", "Code Review", "Mentoria e Treinamento"],
  },
  {
    icon: "fa-solid fa-paint-brush",
    title: "Serviços de Design",
    description:
      "Transformo ideias em experiências visuais que comunicam, encantam e geram resultados. Meu serviço de design é voltado para quem busca identidade, impacto e funcionalidade em cada detalhe.",
    features: ["Identidade Visual", "Design para Mídias Sociais", "Layouts para Impressos", "Apresentações Profissionais", "Personalização Visual"],
  },
  {
    icon: "fas fa-object-group",
    title: "UX/UI Design",
    description:
      "Criação de interfaces intuitivas e experiências de usuário memoráveis. Desenvolvo protótipos interativos, wireframes e designs que combinam estética com usabilidade.",
    features: ["Pesquisa de Usuário (UX Research)", "Wireframes e Protótipos", "Design de Interfaces (UI)", "Testes de Usabilidade", "Design System"],
  },
];

export const timeline = [
  {
    variant: "active professional-experience",
    icon: "fas fa-headset",
    date: "Atual",
    status: "EXPERIÊNCIA ATUAL",
    title: "CUSTOMER EXPERIENCE (CX) | SAC",
    glitch: true,
    company: "Atuação no Setor de Marketing de Empresa Varejista",
    description:
      "Atuando no setor de marketing de uma empresa varejista com foco em <strong>Customer Experience (CX) e SAC</strong>, integrando relacionamento com o cliente, inteligência de dados e suporte operacional às estratégias da marca. Essa vivência corporativa aprimora minha visão analítica, resolução de problemas e empatia com o usuário final.",
    skills: ["Customer Experience (CX)", "Atendimento SAC", "Relacionamento com o Cliente", "Inteligência de Dados"],
    achievements: [
      { icon: "fas fa-smile-beam", label: "Foco na Experiência do Cliente" },
      { icon: "fas fa-chart-line", label: "Suporte Estratégico e de Dados" },
    ],
  },
  {
    variant: "active",
    icon: "fas fa-microchip",
    date: "2025 - 2028",
    status: "EM ANDAMENTO",
    title: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
    glitch: true,
    company: "Centro Universitário Internacional (UNINTER)",
    description:
      "Cursando Bacharelado em Engenharia de Software, estou me capacitando para projetar, desenvolver e manter aplicações com foco em qualidade, eficiência e inovação. Este curso me aprofunda em metodologias ágeis, arquitetura de sistemas robustos e práticas de desenvolvimento de software de ponta.",
    skills: ["Arquitetura de Software", "Gestão de Projetos", "Desenvolvimento Ágil", "Qualidade de Software", "DevOps"],
    achievements: [{ icon: "fas fa-trophy", label: "Nota média: 9.2" }],
  },
  {
    variant: "completed",
    icon: "fas fa-laptop-code",
    date: "2022 - 2024",
    status: "CONCLUÍDO",
    title: "ETEC - Escola Técnica Estadual",
    company: "Centro Paula Souza",
    description:
      "Capacitado para desenvolver, implantar e manter sites, sistemas web e aplicações digitais, com foco em programação, design e banco de dados. O Curso Técnico em Informática para Internet me proporcionou uma base sólida em desenvolvimento front-end e back-end, além de princípios de UX/UI.",
    skills: ["Desenvolvimento Web", "Banco de Dados", "UX/UI", "Front-end", "Back-end"],
    achievements: [
      { icon: "fas fa-medal", label: "Formado com Distinção" },
      { icon: "fas fa-project-diagram", label: "TCC: Plataforma AMETHYSA" },
    ],
  },
  {
    variant: "completed",
    icon: "fas fa-mobile-alt",
    date: "2024",
    status: "CONCLUÍDO",
    title: "DevMedia - Desenvolvedor Web",
    company: "DevMedia",
    description:
      "Foco em desenvolvimento de aplicações Mobile e Front-end com design responsivo e tecnologias modernas. Este curso aprofundou meus conhecimentos em frameworks e bibliotecas atuais, permitindo a criação de interfaces dinâmicas e otimizadas para diversas plataformas.",
    skills: ["Front-end", "Mobile Development", "Responsive Design", "React.js", "JavaScript"],
    achievements: [{ icon: "fas fa-certificate", label: "Certificação Completa" }],
  },
  {
    variant: "completed",
    icon: "fas fa-palette",
    date: "2025 - 2026",
    status: "CONCLUÍDO",
    title: "UX/UI Design & Design Gráfico",
    company: "Estudos Autodidatas e Cursos Online",
    description:
      "Capacitação em Design de Experiência do Usuário (UX) e Interface (UI), abrangendo pesquisa de usuários, wireframing, prototipagem e design visual. Domínio de ferramentas profissionais como Adobe Illustrator, Figma e Photoshop para criação de identidades visuais e materiais gráficos de alto impacto.",
    skills: ["UX Research", "UI Design", "Adobe Illustrator", "Figma", "Design Gráfico", "Prototipagem"],
    achievements: [
      { icon: "fas fa-certificate", label: "Múltiplas Certificações" },
      { icon: "fas fa-pencil-ruler", label: "Portfolio de Design" },
    ],
  },
];

/** Níveis: intermediate | advanced | expert */
export const LEVEL_LABEL = {
  intermediate: "INTERMEDIÁRIO",
  advanced: "AVANÇADO",
  expert: "ESPECIALISTA",
};

export const skillCategories = [
  {
    title: "BACK-END & APIs",
    icon: "fas fa-server",
    items: [
      { name: "Java", icon: "fab fa-java", level: "intermediate" },
      { name: "Node.js", icon: "fab fa-node-js", level: "intermediate" },
      { name: "APIs REST", icon: "fas fa-plug", level: "intermediate" },
      { name: "PHP", icon: "fab fa-php", level: "advanced" },
      { name: "Python", icon: "fab fa-python", level: "intermediate" },
    ],
  },
  {
    title: "FRONT-END",
    icon: "fas fa-laptop-code",
    items: [
      { name: "JavaScript", icon: "fab fa-js-square", level: "expert" },
      { name: "React / React Native", icon: "fab fa-react", level: "advanced" },
      { name: "HTML5", icon: "fab fa-html5", level: "expert" },
      { name: "CSS3", icon: "fab fa-css3-alt", level: "expert" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", level: "advanced" },
    ],
  },
  {
    title: "BANCO DE DADOS",
    icon: "fas fa-database",
    items: [
      { name: "MySQL", icon: "fas fa-database", level: "advanced" },
      { name: "PostgreSQL", icon: "fas fa-database", level: "intermediate" },
      { name: "MongoDB", icon: "fas fa-leaf", level: "intermediate" },
    ],
  },
  {
    title: "DEVOPS & FERRAMENTAS",
    icon: "fas fa-tools",
    items: [
      { name: "Docker", icon: "fab fa-docker", level: "intermediate" },
      { name: "Git", icon: "fab fa-git-alt", level: "advanced" },
      { name: "GitHub", icon: "fab fa-github", level: "advanced" },
      { name: "Figma", icon: "fab fa-figma", level: "advanced" },
    ],
  },
  {
    title: "COMPETÊNCIAS COMPLEMENTARES",
    icon: "fas fa-user-check",
    items: [
      { name: "Análise de Indicadores (Power BI)", icon: "fas fa-chart-pie", level: "advanced" },
      { name: "Comunicação com Usuários", icon: "fas fa-comments", level: "expert" },
      { name: "Resolução de Problemas", icon: "fas fa-puzzle-piece", level: "advanced" },
    ],
  },
];

export const designCategories = [
  {
    title: "EXPERIÊNCIA DO USUÁRIO (UX)",
    icon: "fas fa-users",
    items: [
      { name: "UX Research", icon: "fas fa-search", level: "advanced", text: "Pesquisa de usuários, entrevistas, personas e jornadas do usuário para entender necessidades reais." },
      { name: "Arquitetura da Informação", icon: "fas fa-sitemap", level: "advanced", text: "Organização e estruturação de conteúdo para navegação intuitiva e eficiente." },
      { name: "Testes de Usabilidade", icon: "fas fa-clipboard-check", level: "intermediate", text: "Avaliação heurística, testes A/B e análise de métricas para otimização contínua." },
      { name: "User Flow & Wireframes", icon: "fas fa-route", level: "expert", text: "Mapeamento de fluxos de usuário e criação de wireframes de baixa e alta fidelidade." },
    ],
  },
  {
    title: "INTERFACE DO USUÁRIO (UI)",
    icon: "fas fa-palette",
    items: [
      { name: "Design Visual", icon: "fas fa-layer-group", level: "expert", text: "Criação de interfaces atraentes com hierarquia visual, tipografia e paletas de cores harmônicas." },
      { name: "Design System", icon: "fas fa-th", level: "advanced", text: "Criação de componentes reutilizáveis, tokens de design e documentação para consistência." },
      { name: "Design Responsivo", icon: "fas fa-mobile-alt", level: "expert", text: "Interfaces adaptáveis para todos os dispositivos com foco em mobile-first." },
      { name: "Prototipagem Interativa", icon: "fas fa-magic", level: "advanced", text: "Protótipos funcionais e animados para validação de conceitos e apresentações." },
    ],
  },
  {
    title: "DESIGN GRÁFICO",
    icon: "fas fa-pen-nib",
    items: [
      { name: "Identidade Visual", icon: "fas fa-id-card", level: "advanced", text: "Criação de logos, manual de marca, papelaria e materiais institucionais completos." },
      { name: "Social Media Design", icon: "fas fa-ad", level: "expert", text: "Posts, stories, banners e campanhas visuais para redes sociais de alto engajamento." },
      { name: "Material Impresso", icon: "fas fa-print", level: "advanced", text: "Cartões de visita, flyers, folders, banners e materiais promocionais para impressão." },
      { name: "Ilustração Vetorial", icon: "fas fa-vector-square", level: "intermediate", text: "Criação de ilustrações, ícones personalizados e elementos gráficos vetoriais." },
    ],
  },
];

export const designTools = [
  { name: "Figma", icon: "fab fa-figma", text: "UI/UX Design, Prototipagem, Design System", level: "expert" },
  { name: "Adobe Illustrator", icon: "fas fa-pen-nib", text: "Vetores, Logos, Ilustrações, Identidade Visual", level: "advanced" },
  { name: "Adobe Photoshop", icon: "fas fa-image", text: "Edição de Imagens, Manipulação, Mockups", level: "intermediate" },
  { name: "Canva Pro", icon: "fas fa-bezier-curve", text: "Social Media, Apresentações, Layouts", level: "expert" },
];

export const designProcess = [
  { title: "Descoberta", text: "Entendimento do problema, pesquisa de usuários, análise de concorrentes e definição de objetivos." },
  { title: "Ideação", text: "Brainstorming, sketches, wireframes e definição da arquitetura da informação." },
  { title: "Design", text: "Criação de protótipos de alta fidelidade, design visual e componentes interativos." },
  { title: "Validação", text: "Testes de usabilidade, coleta de feedback e iterações para refinamento do produto." },
  { title: "Entrega", text: "Handoff para desenvolvimento, documentação e acompanhamento da implementação." },
];

export const workflow = [
  {
    title: "AMBIENTE DE DESENVOLVIMENTO",
    icon: "fas fa-desktop",
    items: [
      { name: "VS Code", icon: "fas fa-code", text: "Meu editor de código principal, com extensões para produtividade e depuração." },
      { name: "Terminal (Zsh/Oh My Zsh)", icon: "fas fa-terminal", text: "Para linha de comando eficiente e scripts personalizados." },
      { name: "Git & GitHub Desktop", icon: "fab fa-git-alt", text: "Controle de versão e colaboração em projetos." },
    ],
  },
  {
    title: "PROCESSO DE DESENVOLVIMENTO",
    icon: "fas fa-project-diagram",
    items: [
      { name: "Concepção e Planejamento", icon: "fas fa-lightbulb", text: "Início com brainstorming, wireframes (Figma) e definição de requisitos." },
      { name: "Design e Prototipagem", icon: "fas fa-pencil-ruler", text: "Criação de interfaces no Figma e prototipagem de componentes." },
      { name: "Desenvolvimento Ágil", icon: "fas fa-laptop-code", text: "Iterações rápidas, testes contínuos e integração de feedback." },
      { name: "Deploy e Manutenção", icon: "fas fa-cloud-upload-alt", text: "Implantação em plataformas como Vercel/AWS e monitoramento pós-lançamento." },
    ],
  },
  {
    title: "FERRAMENTAS DE DESIGN",
    icon: "fas fa-palette",
    items: [
      { name: "Figma", icon: "fab fa-figma", text: "Ferramenta principal para UI/UX design, prototipagem interativa e colaboração em tempo real." },
      { name: "Adobe Illustrator", icon: "fas fa-pen-nib", text: "Criação de vetores, logos, ilustrações e identidade visual profissional." },
      { name: "Adobe Photoshop", icon: "fas fa-image", text: "Edição de imagens, mockups e tratamento fotográfico para projetos digitais." },
      { name: "Canva Pro", icon: "fas fa-wand-magic-sparkles", text: "Criação rápida de materiais para social media, apresentações e marketing." },
    ],
  },
];

export const testimonials = [
  {
    name: "Carlos de Almeida",
    role: "Empreendedor (Padaria)",
    quote:
      "Profissionalismo e agilidade definem o trabalho do Bima. Ele captou perfeitamente a essência do meu negócio e transformou em realidade digital o que eu queria. Entregou antes do prazo e com qualidade superior. Muito satisfeito!",
    projectIcon: "fas fa-mobile-alt",
    project: "Designer Gráfico + Dashboard",
  },
  {
    name: "Rose Sanches",
    role: "Designer",
    quote:
      "A colaboração com Abimael foi fantástica. Ele é proativo, resolve problemas com criatividade e entrega soluções excepcionais na área de design e elementos gráficos. Trabalhar com ele elevou o nível dos nossos projetos. Um verdadeiro talento!",
    projectIcon: "fas fa-palette",
    project: "Redesign de Interface",
  },
];

export const projectFilters = [
  { value: "all", label: "TODOS" },
  { value: "web", label: "WEB" },
  { value: "system", label: "SISTEMAS" },
  { value: "ecommerce", label: "E-COMMERCE" },
  { value: "game", label: "JOGOS" },
  { value: "design", label: "DESIGN" },
];

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com";

export const projects = [
  {
    title: "AMETHYSA",
    categories: ["web", "system"],
    label: "PLATAFORMA MUSICAL",
    image: `${BLOB}/amhtome-ra0mFqUh2RrlEm3fqF9qvSYGDWLsUL.jpeg`,
    demo: null,
    repo: social.github,
    description:
      "Plataforma online completa para artistas independentes divulgarem músicas, organizá-las em rankings e interagir com o público.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "PHP", "MySQL"],
    stats: [
      { icon: "fas fa-users", label: "500+ Usuários" },
      { icon: "fas fa-music", label: "1000+ Músicas" },
    ],
  },
  {
    title: "Gerenciador de Tarefas Profissional",
    categories: ["web", "system"],
    label: "SISTEMA WEB",
    image: `${BLOB}/taf-bmMRtm9WL4p6TCe2iJxlLjjArhDR9C.jpeg`,
    demo: "/projetos/grtatarefas.html",
    repo: social.github,
    description:
      "Sistema completo de gerenciamento de tarefas com autenticação de usuários, filtros avançados, ordenação por prioridade/data e estatísticas detalhadas.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "React.js"],
    features: [
      { icon: "fas fa-shield-alt", label: "Autenticação Segura" },
      { icon: "fas fa-filter", label: "Filtros Avançados" },
    ],
  },
  {
    title: "Biblioteca Central - Reserva de Salas",
    categories: ["web", "system"],
    label: "SISTEMA DE RESERVAS",
    image: `${BLOB}/bli-i476HyeOBg8pGm96zih9Z3TSGhsZ3x.png`,
    demo: "/projetos/bli.html",
    repo: social.github,
    description:
      "Sistema completo para reserva de salas de estudo em biblioteca, com calendário interativo, seleção de horários disponíveis e interface moderna.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive", "Python"],
    features: [
      { icon: "fas fa-calendar-alt", label: "Calendário Interativo" },
      { icon: "fas fa-clock", label: "Horários em Tempo Real" },
    ],
  },
  {
    title: "Dashboard de Hábitos",
    categories: ["web", "system"],
    label: "APP DE PRODUTIVIDADE",
    image: `${BLOB}/hab-4oGwVF9RklYUJFWAJsuOFBGbOyHUNf.png`,
    demo: "/projetos/hab.html",
    repo: social.github,
    description:
      "Aplicativo completo para tracking de hábitos diários com interface glassmorphism, animações fluidas, estatísticas visuais e sistema de streaks.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "MySQL", "React.js"],
    features: [
      { icon: "fas fa-fire", label: "Sistema de Streaks" },
      { icon: "fas fa-chart-pie", label: "Estatísticas Visuais" },
    ],
  },
  {
    title: "Caça ao Tesouro Pirata",
    categories: ["game", "web"],
    label: "JOGO INTERATIVO",
    image: `${BLOB}/game-HL1OdgPiCH4ZxAlTwY1QNEfj7u6McZ.png`,
    demo: "/projetos/game.html",
    repo: social.github,
    description:
      "Jogo interativo de busca ao tesouro com mapa temático de pirata, sistema de dicas quente/frio, animações de vitória e placar persistente.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas"],
    features: [
      { icon: "fas fa-gamepad", label: "Gameplay Interativo" },
      { icon: "fas fa-trophy", label: "Sistema de Pontuação" },
    ],
  },
  {
    title: "Sistema de Eficiência",
    categories: ["web", "system"],
    label: "DASHBOARD EMPRESARIAL",
    image: "/img/pjn.png",
    demo: "/projetos/prjnovo.html",
    repo: social.github,
    description:
      "Dashboard moderno com gráficos interativos (Chart.js), KPIs em tempo real, histórico de atividades e exportação CSV.",
    tech: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    features: [
      { icon: "fas fa-chart-line", label: "Gráficos em Tempo Real" },
      { icon: "fas fa-file-export", label: "Exportação CSV" },
    ],
  },
  {
    title: "Loja Virtual Completa",
    categories: ["ecommerce", "web"],
    label: "E-COMMERCE",
    image: `${BLOB}/image%20%285%29.png-NZ7yfCJ6BreHPrrkP1k6RX1oIfvsxn.jpeg`,
    demo: "/projetos/loja.html",
    repo: social.github,
    description:
      "E-commerce completo com catálogo de produtos, carrinho inteligente, wishlist, filtros avançados, checkout simulado e UI moderna.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    features: [
      { icon: "fas fa-shopping-cart", label: "Carrinho Inteligente" },
      { icon: "fas fa-credit-card", label: "Checkout Completo" },
    ],
  },
  {
    title: "YouTube Clone - Interface Completa",
    categories: ["web", "design"],
    label: "CLONE UI",
    image: `${BLOB}/yout-O7MKzYrNFWrJ9Vix52Zhwu3fttsi0f.jpg`,
    demo: "/projetos/index.html",
    repo: social.github,
    description:
      "Clone fiel da interface do YouTube com sidebar colapsável, barra de categorias, mini player, busca funcional e tema claro/escuro.",
    tech: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    features: [
      { icon: "fas fa-play-circle", label: "Mini Player" },
      { icon: "fas fa-keyboard", label: "Atalhos de Teclado" },
    ],
  },
  {
    title: "Identidade Visual Corporativa",
    categories: ["design"],
    label: "DESIGN GRÁFICO",
    image: "/img/at.gif",
    demo: null,
    description: "Projeto completo de identidade visual incluindo logo, paleta de cores e manual de marca.",
    tech: ["Adobe Illustrator", "Branding", "Logo Design"],
    features: [{ icon: "fas fa-palette", label: "Manual de Marca" }],
  },
  {
    title: "Design de App Mobile",
    categories: ["design"],
    label: "UX/UI DESIGN",
    image: "/img/at.gif",
    demo: null,
    description: "Projeto de UX/UI completo para aplicativo mobile com pesquisa de usuários e protótipo interativo.",
    tech: ["Figma", "UX Research", "Prototyping"],
    features: [{ icon: "fas fa-object-group", label: "Protótipo Interativo" }],
  },
];
