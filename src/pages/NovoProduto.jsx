import React, { useState } from 'react';
import api from '../api/api';

function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/produtos', { nome, preco: parseFloat(preco) })
      .then(() => {
        alert('Produto cadastrado com sucesso!');
        setNome('');
        setPreco('');
      })
      .catch(error => {
        alert('Erro ao cadastrar produto');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Preço:</label>
          <input value={preco} onChange={e => setPreco(e.target.value)} required type="number" step="0.01" />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default NovoProduto;
