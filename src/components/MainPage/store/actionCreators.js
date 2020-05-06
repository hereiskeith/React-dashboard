import { actionConstants } from "./index";

export const setMinimized = (minimized) => ({
  type: actionConstants.SET_MINIMIZED,
  data: !minimized,
});

export const setFocus = (title) => ({
  type: actionConstants.SET_FOCUS,
  data: title,
});
