import { fromJS } from 'immutable';
import { actionConstants } from './index'

const defaultState = fromJS({
  focus: 'Dashboard',
  minimized: false,
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionConstants.SET_FOCUS:
      return state.set('focus', action.data);
    case actionConstants.SET_MINIMIZED:
      return state.set('minimized', action.data);
    default:
      return state;
  }
};

export default reducer;