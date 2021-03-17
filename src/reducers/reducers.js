const initialState = {
  users: [
    {
      id: 1,
      name: "Bartlett Surgey",
      email: "bsurgey0@goo.gl",
      gender: "Male",
    },
    {
      id: 2,
      name: "Aileen Leathley",
      email: "aleathley1@livejournal.com",
      gender: "Female",
    },
    {
      id: 3,
      name: "Gunter Getley",
      email: "ggetley2@gravatar.com",
      gender: "Male",
    },
    {
      id: 4,
      name: "Tomlin Claybourne",
      email: "tclaybourne3@huff.com",
      gender: "Male",
    },
    {
      id: 5,
      name: "Gian Faltskog",
      email: "gfaltskog4@eepurl.com",
      gender: "Male",
    },
    {
      id: 6,
      name: "Bernhard Nicholson",
      email: "bn@buzzfeed.com",
      gender: "Male",
    },
  ],

  filteredUsers: [],

  user: {
    name: "John",
    email: "Doe",
    gender: "Male",
  },
};

const filterUsersById = (users, userId) => {
  return users.filter((user) => user.id !== userId);
};

const findUser = (users, userId) => {
  return users.find((user) => userId === user.id);
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "USERS_LOADED":
      return {
        ...state,
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

    case "USER_UPDATED":
      const editedData = action.payload;
      const editedUser = findUser(state.users, editedData.id);
      console.log(editedUser);
      const itemIndex = state.users.findIndex(
        (user) => user.id === editedData.id
      );
      const item = state.users[itemIndex];
      const editedUserData = {
        ...item,
        id: editedData.id,
        name: editedData.name,
        email: editedData.email,
        gender: editedData.gender,
      };

      return {
        ...state,
        users: [
          ...state.users.slice(0, itemIndex),
          editedUserData,
          ...state.users.slice(itemIndex + 1),
        ],
        user: editedUserData,
      };
    case "USER_DELETED":
      const userId = action.payload;
      const newUsers = filterUsersById(state.users, userId);
      return {
        ...state,
        users: newUsers,
      };

    case "USER_SHOWN":
      const showUserId = action.payload;
      const showUser = findUser(state.users, showUserId);
      return {
        ...state,
        user: showUser,
      };

    case "USERS__FILTERED":
      const userGender = action.payload;
      const filteredUsers = state.users.filter(
        (user) => user.gender === userGender
      );

      return {
        ...state,
        filteredUsers: filteredUsers,
      };
    default:
      return state;
  }
};

export default reducer;
