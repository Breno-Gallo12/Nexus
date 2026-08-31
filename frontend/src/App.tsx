import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProjetoDetalhes } from './pages/ProjetoDetalhes'; // Importação da nova página

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rota da Página Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Rota da Página de Detalhes do Projeto */}
          <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;