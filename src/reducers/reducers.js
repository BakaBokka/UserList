const initialState = {
  users: [
   
  ],
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case "USERS_LOADED":
     return {
      users: action.payload
     };
     default:
     return state;
 }
};

export default reducer;
