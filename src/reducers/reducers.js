const initialState = {
  users: [{
    "id": 1,
    "name": "Bartlett Surgey",
    "email": "bsurgey0@goo.gl",
    "gender": "Male"
  }, {
    "id": 2,
    "name": "Aileen Leathley",
    "email": "aleathley1@livejournal.com",
    "gender": "Female"
  }, {
    "id": 3,
    "name": "Gunter Getley",
    "email": "ggetley2@gravatar.com",
    "gender": "Male"
  }, {
    "id": 4,
    "name": "Tomlin Claybourne",
    "email": "tclaybourne3@huffingtonpost.com",
    "gender": "Male"
  }, {
    "id": 5,
    "name": "Gian Faltskog",
    "email": "gfaltskog4@eepurl.com",
    "gender": "Male"
  }, {
    "id": 6,
    "name": "Bernhard Nicholson",
    "email": "bnicholson5@buzzfeed.com",
    "gender": "Male"
  }],
};

const filterUsers = (users, userId) => {
  return users.filter((user) => user.id !== userId);
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "USERS_LOADED":
      return {
        users: action.payload,
      };
    case "USER_ADDED":
      const data = action.payload;
      const newUser = {
        id: data.id,
        name: data.name,
        email: data.email,
        gender: data.gender,
      };

      return {
        ...state,
        users: [...state.users, newUser],
      };
    case "USER_DELETED":
      const userId = action.payload;
      const newUsers = filterUsers(state.users, userId);

      return {
        ...state,
        users: newUsers,
      };
    default:
      return state;
  }
};

export default reducer;
