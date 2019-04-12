import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "./User";
import { setUser } from "../../actinos/user";

const UserList = ({ users, setUser }) => {
  return (
    <section>
      <p>User List</p>
      {users && (
        <ul>
          {users.map(user => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      )}

      <button onClick={() => setUser()}>set user</button>
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  setUser: PropTypes.func,
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(
  mapStateToProps,
  { setUser }
)(UserList);
