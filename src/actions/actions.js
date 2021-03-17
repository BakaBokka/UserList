export const usersLoaded = (newUsers) => {
  return {
    type: "USERS_LOADED",
    payload: newUsers,
  };
};

export const userAdded = (newUser) => {
  return {
    type: "USER_ADDED",
    payload: newUser,
  };
};

export const userUpdated = (editedUser) => {
  return {
    type: "USER_UPDATED",
    payload: editedUser,
  };
};

export const userDeleted = (userId) => {
  return {
    type: "USER_DELETED",
    payload: userId,
  };
};

export const userShown = (userId) => {
  return {
    type: "USER_SHOWN",
    payload: userId,
  };
};

export const usersFiltered = (gender) => {
  return {
    type: "USERS__FILTERED",
    payload: gender,
  };
};
