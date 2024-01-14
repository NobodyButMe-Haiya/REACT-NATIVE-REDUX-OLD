import {
  SET_AUTHENTICATED,
  SET_TOKEN,
  RESET_AUTH,
  SET_NOTIFICATIONS,
} from './Constant';

export const setAuthenticated = isAuthenticated => ({
  type: SET_AUTHENTICATED,
  payload: isAuthenticated,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const resetAuth = () => ({
  type: RESET_AUTH,
});

export const setNotifications = notifications => ({
  type: SET_NOTIFICATIONS,
  payload: notifications,
});
