import { Calendar } from 'lucide-react';

export function Timeline() {
  const eventos = [
    {
      ano: '2022',
      titulo: 'Início da Graduação',
      descricao: 'Início da graduação em Ciência da Computação na Faculdades Integradas de Bauru (FIB).',
    },
    {
      ano: '2025',
      titulo: 'Desenvolvimento do TCC e Conclusão da Graduação',
      descricao: 'Trabalho de Conclusão de Curso com foco no desenvolvimento e documentação usando o framework React e Python, e conclusão da graduação.',
    },
    {
      ano: '2026',
      titulo: 'Portfólio Profissional e Freelances',
      descricao: 'Criação do portfólio profissional e aprofundamento prático em desenvolvimento de software, e desenvolvimento de freelances.',
    },
    {
      ano: 'Atualidade',
      titulo: 'Busca por Oportunidades',
      descricao: 'Focado em ingressar no mercado como desenvolvedor e aplicar as habilidades Full Stack em projetos reais.',
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="space-y-16">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain inline-block">
            Minha Trajetória
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Linha do Tempo Vertical Alternada */}
        <div className="relative">
          {/* Linha Central (Desktop) / Esquerda (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {eventos.map((evento, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Espaçador invisível para empurrar o conteúdo no desktop */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Ícone fixo na linha */}
                <div className="absolute left-6 md:left-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg shadow-primary/20 z-10 mt-1 md:mt-0">
                  <Calendar size={16} className="text-primary" />
                </div>
                
                {/* Card de Conteúdo */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                }`}>
                  <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors shadow-sm inline-block w-full">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                      {evento.ano}
                    </span>
                    <h3 className="text-textMain font-bold text-xl mb-2">
                      {evento.titulo}
                    </h3>
                    <p className="text-textSec text-sm leading-relaxed">
                      {evento.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}