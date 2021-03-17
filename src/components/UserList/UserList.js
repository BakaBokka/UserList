import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import UserListItem from "../UserListItem/UserListItem";
import AddUserModal from "../AddUserModal/AddUserModal";
import withUserListService from "../HOC/withUserListService";
import { usersLoaded, userAdded, userDeleted, userShown } from "../../actions/actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    maxWidth: "100%",
    width: "100%",
  },

  item: {
    border: "1px solid lightgray",
    borderTopLeftRadius: "10px",
    margin: "0 0 10px",
    boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6)",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 660px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    width: "fit-content",
  },
  icon: {
    "@media (max-width: 440px)": {
      display: "none",
    },
  },
});

function UserList({ user, users, getUsers, usersLoaded, handleAddUser, handleDelete,handleUserShow }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const data = users;
    usersLoaded(data);
    user && handleUserShow(user.id)


    // eslint-disable-next-line
  }, [user]);

  const handleModal = () => {
    setOpen(true);
  };

  const userElement = users.map((user) => {
    return (
      <ListItem className={classes.item} key={user.id}>
        <div className={classes.itemInfo}>
          <ListItemIcon className={classes.icon}>
            <PersonIcon fontSize="large" />
          </ListItemIcon>
          <UserListItem user={user} />
        </div>
        <div>
          <IconButton to="/user" component={Link} onClick={() => handleUserShow(user.id)}>
            <VisibilityIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={()=> handleDelete(user.id)}>
            <HighlightOffIcon fontSize="large"/>
          </IconButton>
        </div>
      </ListItem>
    );
  });



  return (
    <Box className={classes.container}>
      <IconButton color="default" onClick={handleModal}>
        <PersonAddIcon fontSize="large" />
      </IconButton>
      <List component="ul" className={classes.list}>
        {userElement}
      </List>
      <AddUserModal
        open={open}
        setOpen={setOpen}
        handleAddUser={handleAddUser}
      />
    </Box>
  );
}

const mapStateToProps = ({ users }) => {
  return { users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersLoaded: (newUsers) => {
      dispatch(usersLoaded(newUsers));
    },
    handleAddUser: (newUser) => {
      dispatch(userAdded(newUser));
    },
    handleDelete: (userId) => {
      dispatch(userDeleted(userId))
    },
    handleUserShow: (userId) => {
      dispatch(userShown(userId));
    },
  };
};

export default withUserListService()(
  connect(mapStateToProps, mapDispatchToProps)(UserList)
);
