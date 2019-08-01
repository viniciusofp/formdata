import React, { Component } from "react";
import AuthForm from "./Auth";
import axios from "axios";

class Main extends Component {
  state = {};
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
      baseURL: `${body.url}login`,
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
      var response = await axios(options);
      console.log(response.data);
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
              <AuthForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
