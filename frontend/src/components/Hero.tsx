import { Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export function Hero() {                                                                        
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna Esquerda: Textos e Botões */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl text-textSec font-semibold tracking-wide">
              Olá, eu sou
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-textMain tracking-tighter">
              BRENO GALLO DEL TURCO
            </h1>
            <h3 className="text-2xl md:text-3xl text-primary font-semibold">
              Desenvolvedor Full Stack
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projetos"
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-primary text-textMain font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30"
            >
              Ver Projetos
            </a>
            <a 
              href="https://github.com/Breno-Gallo12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-md bg-card border border-border text-textMain font-semibold hover:border-textSec transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Coluna Direita: Ilustração / Imagem */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-card rounded-full flex items-center justify-center border border-border shadow-2xl">
            {/* Efeito de brilho de fundo */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"></div>
            
            {/* Ilustração temporária */}
            <Terminal size={120} className="text-primary z-10" strokeWidth={1} />
          </div>
        </div>

      </div>
    </section>
  );
}   