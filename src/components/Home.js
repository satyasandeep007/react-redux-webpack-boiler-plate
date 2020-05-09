import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, login, logout } from "../redux/actions/actions";

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

  }

  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  login() {
    this.props.login();
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <div>
          <h4>Count : {this.props.count}</h4>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <h4>is logged : {this.props.logged ? "true" : "false"} </h4>
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.tasks.count,
  logged: state.logger.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: count => dispatch(increment(count)),
    decrement: count => dispatch(decrement(count)),
    login: logged => dispatch(login(logged)),
    logout: logged => dispatch(logout(logged))
  };
};

export default connect(mapStateToProps
  , mapDispatchToProps
)(Component2);
