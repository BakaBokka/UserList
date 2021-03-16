import React, {useEffect} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import UserListItem from "../UserListItem/UserListItem";
import withUserListService from "../HOC/withUserListService";
import {usersLoaded} from "../../actions/actions";
import {connect} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "70%",
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
    display: "flex",
    justifyContent: "space-between",
    '@media (max-width: 660px)' : {
      display: "flex",
      flexDirection: "column",

    },

  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    width: "fit-content",
    '@media (max-width: 440px)' : {
      // display: "none",

    }
  },
  icon: {
    '@media (max-width: 440px)' : {
      display: "none",


    }
  }

});


function UserList({users, getUsers, usersLoaded }) {
  const classes = useStyles();


  useEffect(() => {
    const data = getUsers();
    usersLoaded(data)
    // eslint-disable-next-line
  }, [users])

  const userElement = users.map((user) => {
    return (
      <ListItem className={classes.item} key={user.id}>
        <div className={classes.itemInfo} >
        <ListItemIcon className={classes.icon} >
          <PersonIcon fontSize="large" />
        </ListItemIcon>
        <UserListItem user={user} />
        </div>
        <div>
        <ListItemIcon className={classes.iconButton}>
          <VisibilityIcon fontSize="large" />
        </ListItemIcon>
        <ListItemIcon className={classes.iconButton}>
          <HighlightOffIcon fontSize="large" />
        </ListItemIcon>
        </div>
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

const mapStateToProps = ({users}) => {
  return {users};
};

const mapDispatchToProps =  {
  usersLoaded
}

export default withUserListService()(connect(mapStateToProps, mapDispatchToProps)(UserList));
