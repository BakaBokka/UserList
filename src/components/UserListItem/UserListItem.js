import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#404040"
  },
});

function UserListItem({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h6" component="h3">
        {user.name}
      </Typography>
      <Typography  variant="body1">
        {user.email}
      </Typography>
      <Typography  variant="body1">
        Gender: {user.gender}
      </Typography>
    </div>
  );
}

export default UserListItem;
