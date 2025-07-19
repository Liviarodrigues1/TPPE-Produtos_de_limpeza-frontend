import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';
import NovoProduto from './pages/NovoProduto';
import Carrinho from './pages/Carrinho'; // ← nova importação
import './App.css'; // Estilo sugerido

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">🧴</div>
          <input type="text" className="search-input" placeholder="Buscar por..." />
          <div className="header-actions">
            <span>
              Olá, Visitante <Link to="/login">Faça seu login</Link>
            </span>
            <span>
              <Link to="/carrinho" className="link-carrinho">🛒 0 itens | R$ 0,00</Link> {Carrinho}
            </span>
          </div>
        </header>

        <nav className="main-nav">
          <Link to="/">Produtos</Link>
          <Link to="/novo">Novo Produto</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/novo" element={<NovoProduto />} />
            <Route path="/carrinho" element={<Carrinho />} /> {/* ← rota adicionada */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
