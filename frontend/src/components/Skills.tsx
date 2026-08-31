import { Server, Code2, Database, Wrench } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Server className="text-primary" size={28} />,
      skills: ['Python', 'Flask', 'Java', 'Spring Boot', 'REST API', 'JWT', 'PHP']
    },
    {
      title: 'Frontend',
      icon: <Code2 className="text-primary" size={28} />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Banco de Dados',
      icon: <Database className="text-primary" size={28} />,
      skills: ['PostgreSQL', 'SQLite', 'SQL Server']
    },
    {
      title: 'Ferramentas',
      icon: <Wrench className="text-primary" size={28} />,
      skills: ['Docker', 'Git', 'GitHub', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain inline-block">
            Minhas Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-textSec mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para construir soluções completas e eficientes.
          </p>
        </div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 shadow-sm"
            >
              {/* Título da Categoria com Ícone */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                {category.icon}
                <h3 className="text-xl font-bold text-textMain">{category.title}</h3>
              </div>

              {/* Grid de Tecnologias */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-background border border-border text-textSec rounded-md text-sm font-medium hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}