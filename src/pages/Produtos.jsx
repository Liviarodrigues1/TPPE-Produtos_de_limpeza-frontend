import React from "react";
import "../styles/Produtos.css";
import * as imagens from "../assets";

const produtos = [
  {
    id: 1,
    nome: "Lava Roupas Lavanderia Pro Líquido 7L Omo",
    precoOriginal: 83.92,
    precoDesconto: 75.53,
    desconto: 10,
    imagem: imagens.imgOmo,
  },
  {
    id: 2,
    nome: "Sabão em Pó sem Perfume 4kg Brilhante",
    precoOriginal: 46.41,
    precoDesconto: 44.09,
    desconto: 5,
    imagem: imagens.imgBrilhante,
  },
  {
    id: 3,
    nome: "Detergente Neutro 5L Limpol",
    precoOriginal: 21.40,
    precoDesconto: 20.76,
    desconto: 3,
    imagem: imagens.imgDetergente,
  },
  {
    id: 4,
    nome: "Limpador de Pisos Lavanda",
    precoOriginal: 88.51,
    precoDesconto: 84.08,
    desconto: 5 ,
    imagem: imagens.imgOmoLimpador,
  }
];

function Produtos() {
  return (
    <div className="produtos-container">
      <h2 className="titulo-destaque">
        🔥 Os melhores descontos é aqui!
      </h2>
      
      <div className="lista-produtos">
        {produtos.map((produto) => (
          <div className="card-produto" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} className="imagem-produto" />
            <p className="nome-produto">{produto.nome}</p>
            <p className="preco-original">R$ {produto.precoOriginal.toFixed(2)}</p>
            <p className="desconto">-{produto.desconto}%</p>
            <p className="preco-desconto">R$ {produto.precoDesconto.toFixed(2)}</p>
            <button className="botao-comprar">Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
