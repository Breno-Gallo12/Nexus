import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layout, Code2, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projetosData } from '../data/projetos';

export function ProjetoDetalhes() {
  const { id } = useParams();

  const projeto = projetosData.find(p => p.id === Number(id));

  if (!projeto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl text-textMain font-bold">Projeto não encontrado.</h2>
        <Link to="/" className="text-primary hover:underline">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Botão Voltar */}
      <Link to="/" className="inline-flex items-center gap-2 text-textSec hover:text-primary transition-colors mb-8 group font-medium">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Voltar para Home
      </Link>

      <div className="space-y-8">
        {/* Banner do Projeto */}
        <div className="w-full aspect-video md:h-[450px] rounded-2xl border border-border flex items-center justify-center relative overflow-hidden bg-card shadow-lg">
          
          {projeto.bannerDetalhes.includes('youtube.com') || projeto.bannerDetalhes.includes('youtu.be') ? (
            /* Container bloqueador: impede que o usuário clique e pause o vídeo */
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <iframe 
                src={projeto.bannerDetalhes} 
                title={`Vídeo do projeto ${projeto.titulo}`}
                /* O truque: Deixa o iframe muito maior que a tela (150%) e centraliza. 
                   Isso esconde as bordas pretas, o título superior e a logo do YouTube! */
                className="absolute top-1/2 left-1/2 w-[170%] h-[170%] md:w-[130%] md:h-[130%] -translate-x-1/2 -translate-y-1/2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : projeto.bannerDetalhes.endsWith('.mp4') || projeto.bannerDetalhes.endsWith('.webm') ? (
            <video 
              src={projeto.bannerDetalhes} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : projeto.bannerDetalhes.includes('.') ? (
            <img 
              src={projeto.bannerDetalhes} 
              alt={`Banner do projeto ${projeto.titulo}`} 
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className={`w-full h-full ${projeto.bannerDetalhes} flex items-center justify-center`}>
              <ImageIcon size={80} className="text-primary/30" />
            </div>
          )}
          
          {/* Gradiente escuro para dar contraste ao título que fica embaixo */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
        </div>
        {/* Cabeçalho */}
        <div className="mt-12 mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-textMain tracking-tight">
            {projeto.titulo}
          </h1>
          
          {/* Container do botão */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={projeto.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-card border border-border text-textMain py-2.5 px-5 rounded-md font-medium hover:border-textSec transition-colors shadow-sm hover:shadow-md"
            >
              <FaGithub size={20} />
              Repositório GitHub
            </a>
          </div>
        </div>

        {/* Linha divisória e início do conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-border/50">
          
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-textMain flex items-center gap-2">
                <Layout className="text-primary" /> Visão Geral
              </h2>
              <p className="text-textSec leading-relaxed text-lg">{projeto.descricaoCompleta}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-textMain flex items-center gap-2">
                <Code2 className="text-primary" /> Arquitetura e Desafios
              </h2>
              <div className="space-y-6 bg-card border border-border p-6 rounded-xl">
                <div>
                  <h3 className="font-semibold text-textMain mb-2">Estrutura</h3>
                  <p className="text-textSec leading-relaxed">{projeto.arquitetura}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-textMain mb-2">Principais Desafios</h3>
                  <p className="text-textSec leading-relaxed">{projeto.desafios}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-12">
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-textMain border-b border-border/50 pb-2">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="px-3 py-1.5 bg-background border border-border text-textMain rounded-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-textMain border-b border-border/50 pb-2">Funcionalidades</h3>
              <ul className="space-y-3">
                {projeto.funcionalidades.map((func, index) => (
                  <li key={index} className="flex items-start gap-3 text-textSec">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{func}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}