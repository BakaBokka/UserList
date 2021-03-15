export const usersLoaded = (newUsers) => {
  return {
     type: 'USERS_LOADED',
     payload: newUsers
  };
};