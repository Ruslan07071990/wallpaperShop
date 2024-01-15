import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
// import { type } from "@testing-library/user-event/dist/type";
const Button = (props) => {
  const { backgroundColor, text, onClick,type,disabled } = props;

  return (
    <button
      className={styles.btn}
      style={{ backgroundColor }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
     
    </button>
  );
};
Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

export default Button;
