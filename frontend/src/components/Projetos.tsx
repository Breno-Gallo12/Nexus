import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { projetosData } from '../data/projetos';

export function Projetos() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain inline-block">
            Meus Projetos
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-textSec mt-4 max-w-2xl mx-auto">
            Uma seleção de aplicações que desenvolvi, demonstrando minhas habilidades do backend ao frontend.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosData.map((projeto) => (
            <div 
              key={projeto.id} 
              className="bg-card flex flex-col rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Mídia do Card (Usa o bannerCard) */}
              <div className="h-48 bg-card border-b border-border relative overflow-hidden group">
                {projeto.bannerCard.endsWith('.mp4') || projeto.bannerCard.endsWith('.webm') ? (
                  <video 
                    src={projeto.bannerCard} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  />
                ) : projeto.bannerCard.includes('.') ? (
                  <img 
                    src={projeto.bannerCard} 
                    alt={projeto.titulo} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={`w-full h-full ${projeto.bannerCard} flex items-center justify-center`}>
                    <ImageIcon size={48} className="text-border group-hover:text-primary/30 transition-colors" />
                  </div>
                )}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-textMain mb-2">{projeto.titulo}</h3>
                <p className="text-textSec text-sm mb-6 flex-grow">{projeto.descricao}</p>

                {/* Badges de Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tecnologias.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-background border border-border text-xs text-textMain rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a 
                    href={projeto.githubLink}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-background border border-border text-textMain py-2 px-3 rounded-md text-sm font-medium hover:border-textSec transition-colors"
                  >
                    <FaGithub size={16} />
                    Repositório
                  </a>
                  
                  <Link 
                    to={`/projeto/${projeto.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-textMain py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Ver Detalhes
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Mais no GitHub */}
        <div className="flex justify-center pt-8">
          <a 
            href="https://github.com/Breno-Gallo12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaGithub size={20} />
            Ver mais no GitHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}