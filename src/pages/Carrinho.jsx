import React from "react";
import "../styles/Carrinho.css";
import * as imagens from "../assets";

const carrinho = [
  {
    id: 1,
    nome: "Lava Roupas Lavanderia Pro Líquido 7L Omo",
    precoDesconto: 75.53,
    imagem: imagens.imgOmo,
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Detergente Neutro 5L Limpol",
    precoDesconto: 20.76,
    imagem: imagens.imgDetergente,
    quantidade: 1,
  },
];

function Carrinho() {
  const total = carrinho.reduce(
    (acc, item) => acc + item.precoDesconto * item.quantidade,
    0
  );

  return (
    <div className="carrinho-container">
      <h2>🛒 Meu Carrinho</h2>

      {carrinho.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="itens-carrinho">
            {carrinho.map((item) => (
              <div className="item-carrinho" key={item.id}>
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="imagem-carrinho"
                />
                <div className="detalhes-carrinho">
                  <p className="nome-produto">{item.nome}</p>
                  <p className="quantidade">
                    Quantidade: <strong>{item.quantidade}</strong>
                  </p>
                  <p className="preco">
                    Preço unitário: R$ {item.precoDesconto.toFixed(2)}
                  </p>
                  <p className="subtotal">
                    Subtotal: R$ {(item.precoDesconto * item.quantidade).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="total-carrinho">
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button className="botao-finalizar">Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
