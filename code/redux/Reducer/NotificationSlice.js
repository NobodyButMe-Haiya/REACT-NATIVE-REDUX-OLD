import { SET_NOTIFICATIONS } from "../Constant"; //import enum value 

/***
 * Initilize dummy javascript tree object
 */
const initialState = {
  notifications: []
};
/**
 * Filter the dispatch value here to javascript tree object
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};
export default notificationReducer;