import React from "react";
import PropTypes from "prop-types";

const CondicionalIf = ({ condition, children }) => <React.Fragment> {condition && children} </React.Fragment>;

CondicionalIf.propTypes = {
  condition: PropTypes.bool.isRequired
};

export default React.memo(CondicionalIf);