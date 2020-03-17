import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { CSSTransition } from 'react-transition-group';

const Button = props => {
  const { state, onClick, contained, children, className } = props;
  
  return (
    // Use CSS-transition to animate in and out
    <CSSTransition in={state} timeout={500} classNames='flip-button' unmountOnExit>
      <div
        onClick={onClick}
        className={'c-button ' + (contained ? 'c-button-contained ' : '') + className}>
        {children}
      </div>
    </CSSTransition>
  )
};

Button.propTypes = {
  className: PropTypes.string,
  state: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  contained: PropTypes.bool
};

Button.defaultProps = {
  className: '',
  state: false,
  onClick: function () {
  },
  contained: false,

};

export default Button;