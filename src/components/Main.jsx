import React, { Component, Fragment } from "react";
import AuthForm from "./Auth";
import axios from "axios";
import Inscricoes from "./Inscricoes";
import _ from "lodash";
import { exportCSVFile } from "../Csv";

class Main extends Component {
  state = { message: "", ok: "", inscricoes: [], url: "", token: "" };
  handleSubmit = async e => {
    e.preventDefault();
    var body = {
      url: e.target.url.value,
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log(body);
    const options = {
      method: "post",
      baseURL: `https://cors-anywhere.herokuapp.com/${body.url}login`,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      },
      data: {
        username: body.username,
        password: body.password
      }
    };
    try {
      const response = await axios(options);
      const data = response.data;
      this.setState({
        message: data.message,
        ok: data.ok,
        token: data.token,
        url: `https://cors-anywhere.herokuapp.com/${body.url}api`
      });
      if (data.ok) {
        this.callApi(
          `https://cors-anywhere.herokuapp.com/${body.url}api`,
          data.token
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  callApi = async (url, token) => {
    const options = {
      method: "get",
      baseURL:
        "https://cors-anywhere.herokuapp.com/http://form.wiredfestival.com.br/db.json",
      headers: {
        "Content-Type": `application/json`
      }
    };
    try {
      const response = await axios(options);
      let datas = _.uniqBy(response.data, _.property(["ID"]));
      console.log(datas);
      this.setState({ inscricoes: datas });
    } catch (e) {
      console.log(e);
    }
  };
  handleExport = () => {
    const dataArray = [...this.state.inscricoes];
    const preFormattedData = [];
    dataArray.map(item => {
      item.integrantes.map((integrante, i) => {
        item[`integrante${i + 1}Nome`] = integrante.nome;
        item[`integrante${i + 1}Cargo`] = integrante.cargo;
        item[`integrante${i + 1}Email`] = integrante.email;
      });
      const integrantesFaltando = 5 - item.integrantes.length;
      for (let index = 0; index < integrantesFaltando; index++) {
        item[`integrante${5 - index}Nome`] = "";
        item[`integrante${5 - index}Cargo`] = "";
        item[`integrante${5 - index}Email`] = "";
      }
      item.periodoInicio = item.periodo.inicio;
      item.periodoFim = item.periodo.fim;
      delete item.periodo;
      delete item.integrantes;
      preFormattedData.push(item);
    });
    const headers = {
      time: "Horário de Inclusão",
      ID: "ID",
      categoria: "Categoria",
      nome_da_campanha: "Nome da Campanha",
      cliente: "Cliente",
      marca: "Marca",
      organizacao: "Organização",
      cnpj: "CNPJ",
      endereco: "Endereço",
      telefone: "Telefone",
      relevancia: "Relevância",
      budget: "Budget",
      estrategia: "Estratégia",
      videoFile: "Vídeo",
      imageFile: "Conteúdo de Suporte Digital",
      periodoInicio: "Início Veiculação",
      periodoFim: "Fim Veiculação",
      integrante1Nome: "Integrante 1 Nome",
      integrante1Cargo: "Integrante 1 Cargo",
      integrante1Email: "Integrante 1 Email",
      integrante2Nome: "Integrante 2 Nome",
      integrante2Cargo: "Integrante 2 Cargo",
      integrante2Email: "Integrante 2 Email",
      integrante3Nome: "Integrante 3 Nome",
      integrante3Cargo: "Integrante 3 Cargo",
      integrante3Email: "Integrante 3 Email",
      integrante4Nome: "Integrante 4 Nome",
      integrante4Cargo: "Integrante 4 Cargo",
      integrante4Email: "Integrante 4 Email",
      integrante5Nome: "Integrante 5 Nome",
      integrante5Cargo: "Integrante 5 Cargo",
      integrante5Email: "Integrante 5 Email"
    };
    const keys = [];
    _.mapKeys(preFormattedData[0], function(value, key) {
      keys.push(key);
    });

    var itemsFormatted = [];

    // format the data
    preFormattedData.forEach(item => {
      console.log(item);
      let date = new Date(item.time);
      date = date.toLocaleDateString() + " " + date.toTimeString();
      item.time = date;
      itemsFormatted.push({
        time: item.time,
        ID: item.ID.replace(/,/g, ";"),
        categoria: item.categoria.replace(/,/g, ";"),
        nome_da_campanha: item.nome_da_campanha.replace(/,/g, ";"),
        cliente: item.cliente.replace(/,/g, ";"),
        marca: item.marca.replace(/,/g, ";"),
        organizacao: item.organizacao.replace(/,/g, ";"),
        cnpj: item.cnpj.replace(/,/g, ";"),
        endereco: item.endereco.replace(/,/g, ";"),
        telefone: item.telefone.replace(/,/g, ";"),
        relevancia: item.relevancia.replace(/,/g, ";").replace(/\r\n/g, " "),
        budget: item.budget.replace(/,/g, ";"),
        estrategia: item.estrategia.replace(/,/g, ";").replace(/\r\n/g, " "),
        videoFile: item.videoFile.replace(/,/g, ";"),
        imageFile: item.imageFile.replace(/,/g, ";"),
        periodoInicio: item.periodoInicio.replace(/,/g, ";"),
        periodoFim: item.periodoFim.replace(/,/g, ";"),
        integrante1Nome: item.integrante1Nome.replace(/,/g, ";"),
        integrante1Cargo: item.integrante1Cargo.replace(/,/g, ";"),
        integrante1Email: item.integrante1Email.replace(/,/g, ";"),
        integrante2Nome: item.integrante2Nome.replace(/,/g, ";"),
        integrante2Cargo: item.integrante2Cargo.replace(/,/g, ";"),
        integrante2Email: item.integrante2Email.replace(/,/g, ";"),
        integrante3Nome: item.integrante3Nome.replace(/,/g, ";"),
        integrante3Cargo: item.integrante3Cargo.replace(/,/g, ";"),
        integrante3Email: item.integrante3Email.replace(/,/g, ";"),
        integrante4Nome: item.integrante4Nome.replace(/,/g, ";"),
        integrante4Cargo: item.integrante4Cargo.replace(/,/g, ";"),
        integrante4Email: item.integrante4Email.replace(/,/g, ";"),
        integrante5Nome: item.integrante5Nome.replace(/,/g, ";"),
        integrante5Cargo: item.integrante5Cargo.replace(/,/g, ";"),
        integrante5Email: item.integrante5Email.replace(/,/g, ";")
      });
    });
    console.log(itemsFormatted);
    exportCSVFile(headers, itemsFormatted, "inscricoes");
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
              {this.state.ok ? "" : <AuthForm onSubmit={this.handleSubmit} />}
              {this.state.message !== "" ? (
                <div
                  className={
                    this.state.ok
                      ? "alert alert-success mt-3"
                      : "alert alert-danger mt-3"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {this.state.ok ? (
          <Fragment>
            <Inscricoes
              inscricoes={this.state.inscricoes}
              onRefresh={() => this.callApi(this.state.url, this.state.token)}
            />
            <div className="text-center">
              <button
                className="btn btn-primary mt-5 mx-auto"
                onClick={this.handleExport}
              >
                Download as CSV
              </button>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Main;
