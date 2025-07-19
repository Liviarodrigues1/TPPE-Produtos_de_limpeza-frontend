import React, { useEffect, useState } from 'react';
import api from '../api/api';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map(prod => (
          <li key={prod.id}>
            <strong>{prod.nome}</strong> - R$ {prod.preco?.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
