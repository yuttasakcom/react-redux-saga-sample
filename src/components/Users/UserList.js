import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import User from "./User";

const UserList = ({ users }) => {
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
    </section>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(UserList);
