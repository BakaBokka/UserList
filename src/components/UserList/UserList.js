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
import Tooltip from "@material-ui/core/Tooltip";
import WcIcon from "@material-ui/icons/Wc";
import { Link } from "react-router-dom";
import UserListItem from "../UserListItem/UserListItem";
import UserListModal from "../UserListModal/UserListModal";
import {
  usersLoaded,
  userAdded,
  userDeleted,
  userShown,
  usersFiltered,
} from "../../actions/actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    height: "80vh",
    maxWidth: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media (max-width: 480px)": {
      maxWidth: "90%",
    },
  },
  header: {
    padding: "0 0 10px",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    width: "100%",
  },
  content: {
    overflowY: "scroll",
    width: "100%",
    padding: "0 20px 0 0",
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
  filterIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
  },
});

function UserList({
  users,
  filteredUsers,
  usersLoaded,
  handleAddUser,
  handleDelete,
  handleUserShow,
  usersFiltered,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");

  useEffect(() => {
    usersLoaded(users);
    // eslint-disable-next-line
  }, [filteredUsers]);

  useEffect(() => {
    usersFiltered(gender);
    // eslint-disable-next-line
  }, [gender]);

  const handleModal = () => {
    setOpen(true);
  };

  const handleFilter = () => {
    if (gender === "") {
      setGender("Male");
    } else if (gender === "Male") {
      setGender("Female");
    } else setGender("");
  };
  const usersData = filteredUsers.length ? filteredUsers : users;
  const userElement = usersData.map((user) => {
    return (
      <ListItem className={classes.item} key={user.id}>
        <div className={classes.itemInfo}>
          <ListItemIcon className={classes.icon}>
            <PersonIcon fontSize="large" />
          </ListItemIcon>
          <UserListItem user={user} />
        </div>
        <div>
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Go user page"
          >
            <IconButton
              to="/user"
              component={Link}
              onClick={() => handleUserShow(user.id)}
            >
              <VisibilityIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Delete user"
          >
            <IconButton onClick={() => handleDelete(user.id)}>
              <HighlightOffIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </ListItem>
    );
  });

  return (
    <Box className={classes.container}>
      <header className={classes.header}>
        <Tooltip
          disableFocusListener
          disableTouchListener
          placement="left-start"
          title="Add new user"
        >
          <IconButton color="default" onClick={handleModal}>
            <PersonAddIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip
          disableFocusListener
          disableTouchListener
          placement="right-start"
          title="Filter by gender"
        >
          <IconButton color="default" onClick={handleFilter}>
            <WcIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </header>
      <Box className={classes.content}>
        <List component="ul" className={classes.list}>
          {userElement}
        </List>
        <UserListModal open={open} setOpen={setOpen} handler={handleAddUser} />
      </Box>
    </Box>
  );
}

const mapStateToProps = ({ users, filteredUsers }) => {
  return { users, filteredUsers };
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
      dispatch(userDeleted(userId));
    },
    handleUserShow: (userId) => {
      dispatch(userShown(userId));
    },
    usersFiltered: (userGender) => {
      dispatch(usersFiltered(userGender));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
