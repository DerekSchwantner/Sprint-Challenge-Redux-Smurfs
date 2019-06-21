import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };
  render() {
    return (
      <div className="App">
        <div className="smurfs-wrapper">
          {this.props.loading ? (
            <div className="loader">
              {/* <Loader type="Grid" color="#fb553b" height={200} width={200} /> */}
              <p>LOADING...</p>
            </div>
          ) : (
            <div className="list-container">
              <h1 className="title">Welcome to Smurf Village!</h1>
              {this.props.smurfs.map(smurf => (
                <div key={smurf.id} className="smurf-card">
                  <div className="card-body">
                    <h1>{smurf.name}</h1>
                    <h3>Age: {smurf.age}</h3>
                    <h3>Height: {smurf.height}</h3>
                  </div>
                </div>
              ))}
              <form className="smurf-form" onSubmit={this.addSmurf}>
                <h2 className="title">Add a New Smurf to the Village!</h2>
                <div>
                  <input
                    placeholder="Your Smurf's name"
                    name="name"
                    value={this.state.smurf.name}
                    className="login-input"
                    onChange={this.handleChanges}
                  />
                </div>
                <div>
                  <input
                    placeholder="New Smurf's age"
                    name="age"
                    value={this.state.smurf.age}
                    className="login-input"
                    onChange={this.handleChanges}
                  />
                </div>
                <div>
                  <input
                    placeholder="Your Smurf's height"
                    name="height"
                    value={this.state.smurf.height}
                    className="login-input"
                    onChange={this.handleChanges}
                  />
                </div>
                <div>
                  <div>
                    <button className="btn-login shd">Add A Smurf</button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.addSmurf(this.state.smurf);
  };
}

const mapStateToProps = state => ({
  ...state,
  smurfs: state.smurfsReducer.smurfs
});

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addSmurf
  }
)(App);

// onClick={this.addSmurf}
