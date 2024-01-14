import {combineReducers} from '@reduxjs/toolkit';
import authenticationReducer from './AuthenticationSlice';
import notificationReducer from './NotificationSlice';

/***
 * Combine all data transfer object into one global object session
 */
const rootReducer = combineReducers({
  auth: authenticationReducer,
  notification: notificationReducer,
});

export default rootReducer;
