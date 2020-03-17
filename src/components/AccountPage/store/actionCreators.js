import { actionConstants } from './index';
import { fromJS } from 'immutable';

export const setErrorBool = (name, errorBool) => ({
  type: actionConstants.SET_ERROR_BOOL,
  name: name,
  data: errorBool
});

export const signUpNewUser = (signUpData, setInputState, setSubmitState) => {
  return dispatch => {
    dispatch(proceedSignUp(signUpData));
    setInputState('login');
    setSubmitState('noSubmit')
  }
};

const proceedSignUp = (signUpData) => ({
  type: actionConstants.PROCEED_SIGN_UP,
  data: fromJS({
    userName: signUpData['userName'],
    email: signUpData['email'],
    password: signUpData['password'],
    firstName: signUpData['firstName'],
    lastName: signUpData['lastName']
  })
});