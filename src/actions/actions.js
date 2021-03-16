export const usersLoaded = (newUsers) => {
  return {
     type: 'USERS_LOADED',
     payload: newUsers
  };
};

export const userAdded = (newUser) => {
  return {
    type: "USER_ADDED",
    payload: newUser
  }
};

export const userDeleted = (userId) => {
  return {
    type: "USER_DELETED",
    payload: userId
  }
};