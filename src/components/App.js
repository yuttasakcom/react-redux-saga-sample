import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import UserList from "./Users/UserList";
import { setUsers } from "../actinos/user";

class App extends React.Component {
  componentDidMount() {
    this.props.setUsers();
  }

  render() {
    return (
      <div>
        <h1>React Redux Sample</h1>
        <UserList />
      </div>
    );
  }
}

App.propTypes = {
  setUsers: PropTypes.func,
};

export default connect(
  null,
  { setUsers }
)(App);
