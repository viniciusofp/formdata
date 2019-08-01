import React, { Component } from "react";

class AuthForm extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="urlInput">Url do Formulário</label>
          <input
            id="urlInput"
            type="text"
            className="form-control"
            placeholder="Url do Formulário"
            name="url"
            defaultValue="http://ec2-18-191-115-16.us-east-2.compute.amazonaws.com/"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userInput">Usuário</label>
          <input
            id="userInput"
            type="text"
            className="form-control"
            placeholder="Usuário"
            name="username"
            defaultValue="creativexapiuser"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passInput">Senha</label>
          <input
            id="passInput"
            type="text"
            className="form-control"
            placeholder="Senha"
            name="password"
            defaultValue="lal(0op_86Ab^aI"
          />
        </div>
        <button className="btn btn-primary w-100">Autenticar</button>
      </form>
    );
  }
}

export default AuthForm;
