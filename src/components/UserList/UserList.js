import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import UserListItem from "../UserListItem/UserListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "50%",
    width: "100%",
  },
  list: {
    maxWidth: "100%",
    width: "100%",
  },
  iconButton: {
    cursor: "pointer",
    opacity: 1,
    transitionDuration: ".6s",
    "&:hover": {
      opacity: ".6",
    },
  },
  item: {
    border: "1px solid lightgray",
    borderTopLeftRadius: "10px",
    margin: "0 0 10px",
    boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6)",
  },
});

function UserList({ users }) {
  const classes = useStyles();

  const userElement = users.map((user) => {
    return (
      <ListItem className={classes.item} key={user.id}>
        <ListItemIcon>
          <PersonIcon fontSize="large" />
        </ListItemIcon>
        <UserListItem user={user} />
        <ListItemIcon className={classes.iconButton}>
          <VisibilityIcon fontSize="large" />
        </ListItemIcon>
        <ListItemIcon className={classes.iconButton}>
          <HighlightOffIcon fontSize="large" />
        </ListItemIcon>
      </ListItem>
    );
  });

  return (
    <Box className={classes.container}>
      <List component="ul" className={classes.list}>
        {userElement}
      </List>
    </Box>
  );
}

export default UserList;
