const initialState = {
  users: [
    {
      id: 1,
      name: "Alma Vivien",
      email: "avivien0@cmu.edu",
      gender: "Female",
      avatar:
        "https://robohash.org/architectoveritatissit.jpg?size=200x200&set=set1",
    },
    {
      id: 2,
      name: "Nesta Adame",
      email: "nadame1@so-net.ne.jp",
      gender: "Female",
      avatar: "https://robohash.org/eaadomnis.jpg?size=200x200&set=set1",
    },
    {
      id: 3,
      name: "Tootsie MacDonald",
      email: "tmacdonald2@indiegogo.com",
      gender: "Male",
      avatar: "https://robohash.org/totameumcumque.jpg?size=200x200&set=set1",
    },
    {
      id: 4,
      name: "Marline Clilverd",
      email: "mclilverd3@topsy.com",
      gender: "Male",
      avatar: "https://robohash.org/autharummagnam.jpg?size=200x200&set=set1",
    },
    {
      id: 5,
      name: "Irena Tann",
      email: "itann4@china.com.cn",
      gender: "Male",
      avatar:
        "https://robohash.org/repudiandaeperspiciatisnon.jpg?size=200x200&set=set1",
    },
  ],

  filteredUsers: [],

  user: {
    name: "John",
    email: "Doe",
    gender: "Male",
    avatar: "https://robohash.org/Johndoe.jpg?size=300x300&set=set1",
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
        avatar: data.avatar
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
        avatar: editedData.avatar
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
