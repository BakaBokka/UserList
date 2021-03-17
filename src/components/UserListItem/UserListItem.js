import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: "100%",
    width: "fit-content%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 660px)": {
      margin: "0 0 20px",
    },
  },
  title: {
    color: "#404040",

    "@media (max-width: 448px)": {
      fontSize: "1rem",
      textAlign: "center"
    },
  },

  text: {
    wordBreak: "break-all",
    "@media (max-width: 448px)": {
      fontSize: "0.8rem",
      textAlign: "center"
    },
  },
});

function UserListItem({ user }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h6" component="h3">
        {user.name}
      </Typography>
      <Typography className={classes.text} variant="body1">
        {user.email}
      </Typography>
      <Typography className={classes.text} variant="body1">
        Gender: {user.gender}
      </Typography>
    </div>
  );
}

export default UserListItem;
