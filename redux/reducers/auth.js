//TYPES
const SET_USER_STATE = "SET_USER_STATE";
const SET_USER_DATA = "SET_USER_DATA";

//INITIAL STATE

const initialState = {
  userLoged: false,
  userData:''
};

//REDUCERS
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_STATE:
      return { ...state, userLoged: payload };
    
    case SET_USER_DATA:
      return { ...state, userData: payload };

    default:
      return state;
  }
}