import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import UserList from "../UserList/UserList";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    margin: "30px 0",
  },
});

function MainPage() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h3" component="h1">
          Main page
        </Typography>

        <UserList />
      </Container>
    </>
  );
}

export default MainPage;
