import React from 'react';
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ children, type, isDisable, version,}) => {
  return (
    <div>
      <button type={type} disabled={isDisable} className={`btn btn-${version}`} >
        {children}
      </button>
    </div>
  )
}
Button.defaultProps ={
  type: "button",
  version: "primary",
  isDisable: false

}

Button.propTypes = {
children: PropTypes.node.isRequired,
type: PropTypes.string,
version: PropTypes.string,
isDisable: PropTypes.bool

}
export default Button;
