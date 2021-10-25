import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
export default function Button({ disabled, children }) {
  return (
    <div className={`btnWrapper ${disabled ? "btnWrapperDisabled" : ""}`}>
      {children}
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.element,
};
