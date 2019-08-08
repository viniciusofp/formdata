import React, { Component, Fragment } from "react";

class Inscricoes extends Component {
  state = {
    inscricoes: [{ time: Date.now(), periodo: {}, integrantes: [] }]
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const inscricoes = [...this.props.inscricoes].map(inscricao => {
        inscricao.collapsed = true;
        return inscricao;
      });
      this.setState({ inscricoes });
    }
  }
  handleCollapse = id => {
    const inscricoes = [...this.props.inscricoes].map(inscricao => {
      if (inscricao.ID === id) {
        inscricao.collapsed = !inscricao.collapsed;
      }
      return inscricao;
    });
    this.setState({ inscricoes });
  };
  render() {
    return (
      <Fragment>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 mb-3 text-center">
              <h1>
                Inscrições{" "}
                <small>
                  <i
                    onClick={this.props.onRefresh}
                    className="text-success fa fa-refresh"
                  />
                </small>
              </h1>
            </div>
          </div>
        </div>
        {this.state.inscricoes.map((inscricao, index) => {
          let date = new Date(inscricao.time);
          date = date.toLocaleDateString() + " " + date.toTimeString();
          console.log(date);

          return (
            <div className="inscricao container" key={inscricao.ID}>
              <div className="row">
                <div
                  className={
                    inscricao.collapsed
                      ? "col-12 collapseTrigger sticky-top"
                      : "col-12 collapseTrigger headerActive sticky-top"
                  }
                  onClick={() => this.handleCollapse(inscricao.ID)}
                >
                  <h2>
                    Inscrição {index + 1} | {inscricao.organizacao}{" "}
                    <i
                      className={
                        inscricao.collapsed
                          ? "fa  fa-angle-up float-right"
                          : "fa  fa-angle-down float-right"
                      }
                    />
                  </h2>
                </div>
                <div className={inscricao.collapsed ? "d-none" : "col-12 mt-3"}>
                  <p>
                    <strong>ID: </strong>
                    <br />
                    {inscricao.ID}
                  </p>
                  <p>
                    <strong>Data de Inscrição: </strong>
                    <br />
                    {date}
                  </p>
                  <p>
                    <strong>Categoria</strong>
                    <br />
                    {inscricao.categoria}
                  </p>
                  {/* <p>
                    <strong>Premiação</strong>
                    <br />
                    {inscricao.premiacao}
                  </p> */}
                  <p>
                    <strong>Organização</strong>
                    <br />
                    {inscricao.organizacao}
                  </p>
                  <p>
                    <strong>CNPJ</strong>
                    <br />
                    {inscricao.cnpj}
                  </p>
                  <p>
                    <strong>Endereço</strong>
                    <br />
                    {inscricao.endereco}
                  </p>
                  <p>
                    <strong>Telefone</strong>
                    <br />
                    {inscricao.telefone}
                  </p>
                  <p>
                    <strong>Campanha</strong>
                    <br />
                    {inscricao.nome_da_campanha}
                  </p>
                  <p>
                    <strong>Marca</strong>
                    <br />
                    {inscricao.marca}
                  </p>
                  <p>
                    <strong>Cliente</strong>
                    <br />
                    {inscricao.cliente}
                  </p>
                  <p>
                    <strong>Data de início</strong>
                    <br />
                    {inscricao.periodo.inicio}
                  </p>
                  <p>
                    <strong>Data de termino</strong>
                    <br />
                    {inscricao.periodo.fim}
                  </p>
                  <p>
                    <strong>Por que este trabalho é relevante? </strong>
                    <br />
                    {inscricao.relevancia}
                  </p>
                  <p>
                    <strong>Qual foi o budget destinado ao projeto? </strong>
                    <br />
                    {inscricao.budget}
                  </p>
                  <p>
                    <strong>Descreva a estratégia adotada</strong>
                    <br />
                    {inscricao.estrategia}
                  </p>
                  {inscricao.integrantes.map((integrante, i) => {
                    return (
                      <div key={`integrante${i}_${inscricao.ID}`}>
                        <h3>Integrante {i + 1}</h3>
                        <p>
                          <strong>Nome</strong>
                          <br />
                          {integrante.nome}
                        </p>
                        <p>
                          <strong>Cargo</strong>
                          <br />
                          {integrante.cargo}
                        </p>
                        <p>
                          <strong>Email</strong>
                          <br />
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
                      <br />
                    </a>
                  </p>
                  <p>
                    <a
                      href={`${inscricao.imageFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Conteúdo de suporte digital</strong>
                      <br />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Inscricoes;
