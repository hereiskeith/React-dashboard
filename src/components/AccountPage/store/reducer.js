import { fromJS } from 'immutable';
import { actionConstants } from './index'

const defaultState = fromJS({
  error: {
    username: undefined,
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    password: undefined,
    confirmpassword: undefined,
    remerberme: undefined,
    agreeterms: undefined
    }
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionConstants.PROCEED_SIGN_UP:
      return state.set('user', action.data);
    case actionConstants.SET_ERROR_BOOL:
      return state.setIn(['error', action.name], action.data);
    default:
      return state;
  }
};

export default reducer;