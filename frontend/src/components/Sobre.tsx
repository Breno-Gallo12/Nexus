import { MapPin, GraduationCap, Code2 } from 'lucide-react';

export function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Coluna Esquerda: Foto de Perfil */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-border overflow-hidden shadow-2xl bg-card">
            <img src="/Breno2.jpg" alt="Breno Gallo" className="w-full h-full object-cover" style={{ objectPosition: 'center 35%' }} />
          </div>
        </div>

        {/* Coluna Direita: Conteúdo e Cards */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain inline-block">
              Sobre Mim
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          
          <p className="text-textSec text-lg leading-relaxed">
            Sou um Desenvolvedor Full Stack apaixonado por criar soluções eficientes e interfaces modernas. 
            Tenho experiência prática no desenvolvimento de sistemas web, desde a construção de APIs robustas 
            no backend até interfaces responsivas e dinâmicas no frontend. Meu foco é sempre entregar código 
            limpo, escalável e focado na melhor experiência do usuário.
          </p>

          {/* Grid de Cards de Informação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            
            {/* Card 1 */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <GraduationCap className="text-primary" size={24} />
              <span className="text-textMain font-medium">Ciência da Computação</span>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <MapPin className="text-primary" size={24} />
              <span className="text-textMain font-medium">Brasil</span>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <Code2 className="text-primary" size={24} />
              <span className="text-textMain font-medium">Desenvolvedor Full Stack</span>
            </div>

            {/* Card 4 - Status com animação */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="relative flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-textMain font-medium">Disponível para oportunidades</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}