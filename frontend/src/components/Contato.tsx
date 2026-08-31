import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Envia os dados para a API Flask
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://nexus-nak3.onrender.com/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage(data.mensagem);
        // Limpa o formulário
        setFormData({ nome: '', email: '', mensagem: '' });
        
        // Remove a mensagem de sucesso após 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setFeedbackMessage(data.erro || 'Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      setStatus('error');
      setFeedbackMessage('Erro de conexão. Verifique se a API está rodando.');
    }
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="space-y-12">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain inline-block">
            Contato
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-textSec mt-4">
            Tem uma oportunidade ou quer trocar uma ideia? Me mande uma mensagem!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border p-6 md:p-8 rounded-xl space-y-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-textMain mb-1">Nome</label>
              <input 
                type="text" 
                id="nome" 
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                placeholder="Como devo te chamar?" 
                required 
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textMain mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                placeholder="seu@email.com" 
                required 
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-textMain mb-1">Mensagem</label>
              <textarea 
                id="mensagem" 
                rows={5} 
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
                placeholder="Sua mensagem..." 
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
          </div>
          
          {/* Mensagens de Feedback */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-md border border-green-500/20">
              <CheckCircle size={18} />
              <p className="text-sm font-medium">{feedbackMessage}</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-md border border-red-500/20">
              <AlertCircle size={18} />
              <p className="text-sm font-medium">{feedbackMessage}</p>
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 bg-primary text-textMain py-3 px-4 rounded-md font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            <Send size={18} className={status === 'loading' ? 'animate-pulse' : ''} />
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 border-t border-border/50">
          <a href="mailto:brenogallo15@gmail.com" className="flex items-center gap-2 text-textSec hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="font-medium">Email</span>
          </a>
          <a href="https://github.com/Breno-Gallo12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-textSec hover:text-textMain transition-colors">
            <FaGithub size={20} />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/breno-gallo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-textSec hover:text-primary transition-colors">
            <FaLinkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}