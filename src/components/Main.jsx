import React, { Component } from "react";
import AuthForm from "./Auth";
import axios from "axios";
import Inscricoes from "./Inscricoes";

class Main extends Component {
  state = { message: "", ok: "", inscricoes: [] };
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
        "Cache-Control": "no-cache"
      },
      data: {
        username: body.username,
        password: body.password
      }
    };
    try {
      const response = await axios(options);
      const data = response.data;
      this.setState({ message: data.message, ok: data.ok });
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
      baseURL: url,
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": "no-cache"
      }
    };
    try {
      const response = await axios(options);
      console.log(response.data);
      this.setState({ inscricoes: response.data });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 mt-3">
              <h1>Creativex Form Data</h1>
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
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12">
              {this.state.ok ? (
                <Inscricoes inscricoes={this.state.inscricoes} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
