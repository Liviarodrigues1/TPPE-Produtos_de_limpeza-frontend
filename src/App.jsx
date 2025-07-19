import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';
import NovoProduto from './pages/NovoProduto';

function App() {
  return (
    <Router>
      <div>
        <h1>Loja de Produtos Online</h1>
        <nav>
          <Link to="/">Produtos</Link> | <Link to="/novo">Novo Produto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/novo" element={<NovoProduto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
