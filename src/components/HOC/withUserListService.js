import React from "react";
import { UserListConsumer } from "../userListContext/userListContext";

const withUserListService = () => (Wrapped) => {
  return (props) => {
    return (
    <UserListConsumer>
      {(getUsers) => {
        return (<Wrapped {...props} getUsers={getUsers} />);
      }}
    </UserListConsumer>
    );
  };
};
export default withUserListService;