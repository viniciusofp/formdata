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
            defaultValue="http://form.wiredfestival.com.br/"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userInput">Usuário</label>
          <input
            id="userInput"
            type="text"
            className="form-control"
            defaultValue="creativexapiuser"
            name="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passInput">Senha</label>
          <input
            id="passInput"
            type="password"
            className="form-control"
            defaultValue="lal(0op_86Ab^aI"
            name="password"
          />
        </div>
        <button className="btn btn-primary">Autenticar</button>
      </form>
    );
  }
}

export default AuthForm;
