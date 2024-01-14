import { SET_AUTHENTICATED,SET_TOKEN,RESET_AUTH } from "../Constant"; //import enum value 

/***
 * Initilize dummy javascript tree object
 */
const initialState = {
  isAuthenticated: false,
  token: null
};
/**
 * Filter the dispatch value here to javascript tree object
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case RESET_AUTH:
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
};
export default authenticationReducer;