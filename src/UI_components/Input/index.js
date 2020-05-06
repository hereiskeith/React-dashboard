import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { CSSTransition } from "react-transition-group";
import validator from "validator/es";
import { connect } from "react-redux";
import { actionCreators } from "../../components/AccountPage/store";

const Input = (props) => {
  const {
    setErrorBool,
    state,
    name,
    value,
    isValid,
    submitting,
    customErrorNotes,
  } = props;
  const { type, fullLength, onValueChange, placeholder, className } = props;

  useEffect(() => {
    if (state) {
      // Set the error state of each input based on its value
      setErrorBool(name, !checkIfValid(name, value));
    }
  }, [name, value, setErrorBool, checkIfValid, state]);

  useEffect(() => {
    // Initialize the error state to true when input is shown
    if (state) {
      setErrorBool(name, true);
    }
    // Set the error state to false when input is not shown
    if (!state) {
      setErrorBool(name, false);
    }
    return () => {
      // Set the error state to true when input is unmounted
      setErrorBool(name, false);
    };
  }, [state, name, setErrorBool]);

  const checkIfValid = (name, value) => {
    switch (name) {
      case "first name":
        return !!value.match(/[A-Za-z]+/g);
      case "last name":
        return !!value.match(/[A-Za-z]+/g);
      case "username":
        return !!value.match(/[A-Za-z0-9]{4,10}/g);
      case "email":
        return validator.isEmail(value);
      case "password":
        return validator.isLength(value, { min: 6, max: 30 });
      default:
        return isValid;
    }
  };

  const ErrorText = () => {
    // When the form is submitting, and the value of the input is empty,
    // show error text.
    if (submitting && !value) {
      return (
        <div className="c-error-symbol">
          <span>!</span>
          <div className="c-error-text">
            {`This field should not be empty.`}
          </div>
        </div>
      );
    }
    // When the form is submitting, and the value of the input is not valid,
    // show different error text.
    // (isValid property default to false for input that cannot be checked with checkIfValid method,
    // such as confirm password)
    if (submitting && !isValid && !checkIfValid(name, value)) {
      return (
        <div className="c-error-symbol">
          <span style={{ paddingLeft: 2, paddingRight: 2 }}>!</span>
          <div className="c-error-text">
            {customErrorNotes
              ? customErrorNotes
              : `Your ${name} is not correct, please try again.`}
          </div>
        </div>
      );
    }
  };

  return (
    <CSSTransition
      in={state}
      timeout={500}
      classNames="flip-input"
      unmountOnExit
    >
      <div
        className={
          "c-input-wrapper " +
          (fullLength ? "c-input-wrapper-full-length " : "")
        }
      >
        <input
          required={true}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onValueChange}
          value={value}
          className={"c-input " + className}
        />
        {ErrorText()}
      </div>
    </CSSTransition>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  customErrorNotes: PropTypes.string,
  isValid: PropTypes.bool,
  submitting: PropTypes.bool,
  fullLength: PropTypes.bool,
  state: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  state: false,
  type: "text",
  placeholder: "",
  className: "",
  fullLength: false,
  submitting: false,
  isValid: false,
  customErrorNotes: "",
  onValueChange: function () {},
};

const mapState = (state) => ({
  error: state.getIn(["account", "error"]),
});

const mapDispatch = (dispatch) => ({
  setErrorBool(name, errorBool) {
    dispatch(actionCreators.setErrorBool(name, errorBool));
  },
});

export default connect(mapState, mapDispatch)(Input);
