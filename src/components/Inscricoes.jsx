import React, { Component } from "react";

class Inscricoes extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 mb-3">
            <h1>Inscrições</h1>
          </div>
          {this.props.inscricoes.map((inscricao, index) => {
            return (
              <div className="col-12">
                <h2>
                  Inscrição {index + 1} | {inscricao.organizacao}
                </h2>
                <p>
                  <strong>Categoria: </strong>
                  {inscricao.categoria}
                </p>
                <p>
                  <strong>Organização: </strong>
                  {inscricao.organizacao}
                </p>
                <p>
                  <strong>CNPJ: </strong>
                  {inscricao.cnpj}
                </p>
                <p>
                  <strong>Endereço: </strong>
                  {inscricao.endereco}
                </p>
                <p>
                  <strong>Telefone: </strong>
                  {inscricao.telefone}
                </p>
                <p>
                  <strong>Campanha: </strong>
                  {inscricao.nome_da_campanha}
                </p>
                <p>
                  <strong>Marca: </strong>
                  {inscricao.marca}
                </p>
                <p>
                  <strong>Cliente: </strong>
                  {inscricao.cliente}
                </p>
                <p>
                  <strong>Data de início: </strong>
                  {inscricao.periodo.inicio}
                </p>
                <p>
                  <strong>Data de termino: </strong>
                  {inscricao.periodo.fim}
                </p>
                <p>
                  <strong>Por que este trabalho é relevante? </strong>
                  {inscricao.relevancia}
                </p>
                <p>
                  <strong>Qual foi o budget destinado ao projeto? </strong>
                  {inscricao.budget}
                </p>
                <p>
                  <strong>Descreva a estratégia adotada: </strong>
                  {inscricao.estrategia}
                </p>
                {inscricao.integrantes.map((integrante, i) => {
                  return (
                    <div>
                      <h3>Integrante {i + 1}</h3>
                      <p>
                        <strong>Nome: </strong>
                        {integrante.nome}
                      </p>
                      <p>
                        <strong>Cargo: </strong>
                        {integrante.cargo}
                      </p>
                      <p>
                        <strong>Email: </strong>
                        {integrante.email}
                      </p>
                    </div>
                  );
                })}
                <p>
                  <a
                    href={`${inscricao.videoFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Vídeo de dois minutos</strong>
                  </a>
                </p>
                <p>
                  <a
                    href={`${inscricao.imageFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Conteúdo de suporte digital</strong>
                  </a>
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Inscricoes;
