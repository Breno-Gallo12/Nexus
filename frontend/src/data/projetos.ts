export const projetosData = [
  {
    id: 1,
    titulo: 'Board Score - Placar em Tempo Real',
    descricao: 'Aplicação Full Stack para gerenciamento de salas e pontuações de jogos de tabuleiro em tempo real.',
    bannerCard: '/Board.png', 
    bannerDetalhes: 'https://www.youtube.com/embed/vY2K7B2Yysc?autoplay=1&mute=1&controls=0&loop=1&playlist=vY2K7B2Yysc',
    descricaoCompleta: 'Plataforma interativa projetada para substituir placares físicos em jogos de tabuleiro. Usuários podem criar salas privadas, compartilhar códigos de acesso e gerenciar as pontuações e o ranking de todos os jogadores simultaneamente através de uma conexão bidirecional.',
    tecnologias: ['Java', 'Spring Boot', 'WebSockets', 'React', 'Vite'],
    arquitetura: 'Arquitetura cliente-servidor orientada a eventos. O backend foi desenvolvido em Java com Spring Boot, expondo endpoints REST para a criação de salas e utilizando Spring WebSockets para sincronização de estado. O frontend em React gerencia as conexões ativas e atualiza a interface de forma reativa.',
    desafios: 'O principal desafio foi implementar e estabilizar a comunicação via WebSockets, garantindo que as atualizações de pontuação (Score) e os eventos de sala (RoomEvent) fossem processados e transmitidos sem latência para múltiplos clientes conectados na mesma sessão.',
    funcionalidades: [
      'Sistema de criação de salas (Lobby) e entrada via código.',
      'Comunicação bidirecional e sincronização de pontuações ao vivo (WebSockets).',
      'Painel interativo de gerenciamento da sala de jogo.',
      'Rotinas automatizadas (Scheduler) para limpeza de salas inativas no servidor.'
    ],
    githubLink: 'https://github.com/Breno-Gallo12/Board-Score',
  },
  {
    id: 2,
    titulo: 'Mini ERP - Sistema de Gestão Empresarial',
    descricao: 'Sistema completo de gestão (ERP) com controle de clientes, produtos, estoque e registro de vendas.',
    bannerCard: '/Erp.png',
    bannerDetalhes: 'https://www.youtube.com/embed/b48N32dkIJM?autoplay=1&mute=1&controls=0&loop=1&playlist=b48N32dkIJM', 
    descricaoCompleta: 'Uma aplicação Full Stack robusta desenvolvida para facilitar a administração de pequenos negócios. O sistema inclui um painel de controle (Dashboard) com métricas em tempo real e módulos dedicados para o gerenciamento de usuários, estoque e ordens de venda.',
    tecnologias: ['Python', 'Flask', 'React', 'TypeScript', 'Docker', 'SQLAlchemy'],
    arquitetura: 'A arquitetura é dividida em microsserviços conteinerizados via Docker. O backend em Python/Flask expõe uma API RESTful e utiliza SQLAlchemy com Alembic para mapeamento e migrações do banco de dados relacional. O frontend em React foi estruturado de forma modular, criando componentes UI reaproveitáveis (como Tabelas e Inputs) para padronizar as interfaces.',
    desafios: 'Um dos grandes desafios foi garantir a integridade referencial dos dados entre as tabelas de clientes, produtos e vendas, além de implementar um sistema de roteamento seguro (Private Routes) no frontend para proteger o Dashboard e as operações críticas.',
    funcionalidades: [
      'Sistema de login e autenticação com rotas protegidas.',
      'Dashboard analítico para visualização de métricas.',
      'Operações de CRUD (Criar, Ler, Atualizar, Deletar) para clientes, produtos e vendas.',
      'Ambiente totalmente conteinerizado com Docker e Docker Compose.'
    ],
    githubLink: 'https://github.com/Breno-Gallo12/Mini-erp',
  },
  {
    id: 3,
    titulo: 'Sistema de Agendamento Profissional',
    descricao: 'Plataforma Full Stack para controle de disponibilidade, marcação de horários e gestão administrativa.',
    bannerCard: '/Agenda.png',
    bannerDetalhes: 'https://www.youtube.com/embed/JtYh04q7DSw?autoplay=1&mute=1&controls=0&loop=1&playlist=JtYh04q7DSw',
    descricaoCompleta: 'Um sistema de agendamento inteligente criado para automatizar a marcação de serviços. A aplicação conecta uma interface voltada ao cliente final com um robusto painel de administração (AdminPanel) para que os profissionais gerenciem seus compromissos e configurações.',
    tecnologias: ['Node.js', 'Prisma ORM', 'React', 'Tailwind CSS', 'Vite'],
    arquitetura: 'O backend em Node.js utiliza o Prisma ORM para estruturar e versionar o banco de dados através de migrações bem definidas. O frontend, construído com React e Tailwind CSS, interage com a API REST para garantir respostas rápidas e uma experiência fluida para o usuário.',
    desafios: 'O aspecto técnico mais desafiador foi o desenvolvimento do AvailabilityService, responsável por calcular e validar horários livres em tempo real. Foi necessário tratar a complexidade de regras de negócio para evitar conflitos de agendamento (double booking) e respeitar o horário de atendimento configurado.',
    funcionalidades: [
      'Validação inteligente e exibição de horários disponíveis.',
      'Painel de administração exclusivo (AdminPanel) para controle interno.',
      'Modelagem de dados, migrações (Migrations) e Seed automatizado via Prisma.',
      'Interface moderna, leve e responsiva com Tailwind CSS.'
    ],
    githubLink: 'https://github.com/Breno-Gallo12/Sistema-agendamento',
  }
];