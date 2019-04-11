import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import UserList from "./Users/UserList";
import { fetchUsers } from "../actinos/user";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
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
  fetchUsers: PropTypes.func,
};

export default connect(
  null,
  { fetchUsers }
)(App);
