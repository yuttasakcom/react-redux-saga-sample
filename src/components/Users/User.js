import React from "react";
import PropTypes from "prop-types";

const User = ({ name }) => <li>{name && <p>{name}</p>}</li>;

User.propTypes = {
  name: PropTypes.string,
};

export default User;
