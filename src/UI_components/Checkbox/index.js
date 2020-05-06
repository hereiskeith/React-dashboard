import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "../../components/AccountPage/store";
import { connect } from "react-redux";

const Checkbox = (props) => {
  const {
    name,
    state,
    checked,
    className,
    animationState,
    submitting,
    label,
    onChange,
  } = props;
  // Function from mapDispatch below
  const { setErrorBool } = props;

  useEffect(() => {
    // When checkbox is shown in exact state either login or sign up
    // and has the name property set
    if (name && state) {
      // Update the error state (true or false) based on
      // whether it is checked or not
      setErrorBool(name, !checked);
    }
  }, [checked, name, state, setErrorBool]);

  useEffect(() => {
    // Initialize the error state to true when checkbox is shown
    if (name && state) {
      setErrorBool(name, true);
    }
    // Initialize the error state to false when checkbox is not shown
    if (name && !state) {
      setErrorBool(name, false);
    }

    return () => {
      // Set the error state to false when the checkbox is unmounted
      if (name) {
        setErrorBool(name, false);
      }
    };
  }, [state, name, setErrorBool]);

  return (
    <CSSTransition
      in={state}
      timeout={500}
      classNames="flip-checkbox"
      unmountOnExit
    >
      <label
        // When the form is submitting, the checkbox is unchecked and the animation state is set to true,
        // add the class 'c-checkbox-error.
        className={
          "c-checkbox " +
          (submitting && !checked && animationState
            ? "c-checkbox-error "
            : "") +
          className
        }
      >
        {label}
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
        />
        <span className="c-checkbox-checkmark" />
      </label>
    </CSSTransition>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  state: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  animationState: PropTypes.bool,
  submitting: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  name: "",
  state: false,
  checked: false,
  className: "",
  animationState: false,
  submitting: false,
  label: "",
  onChange: function () {},
};

// Map state from store to component's properties
const mapState = (state) => ({
  error: state.getIn(["account", "error"]),
});

const mapDispatch = (dispatch) => ({
  setErrorBool(name, errorBool) {
    // To record the error state in redux store
    dispatch(actionCreators.setErrorBool(name, errorBool));
  },
});

export default connect(mapState, mapDispatch)(Checkbox);
